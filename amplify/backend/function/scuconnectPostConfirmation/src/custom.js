const aws = require("aws-sdk");
const db = new aws.DynamoDB();
const userTableName = process.env.USERTABLE;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

exports.handler = async (event) => {
  //this event will have data that cognito will send us
  // event.request.userAttributes.(sub, username, email)
  // insert code to be executed by your lambda trigger
  // console.log("here's the event-->", event)
  console.log("Cognito event-->", event);
  if (!event?.request?.userAttributes?.sub) {
    /*This code appears to be checking whether the event object has a request property with a userAttributes property that in turn has a sub property.
    If present, the value of event.request.userAttributes.sub would likely represent the unique identifier for the user making the request. 
    The sub attribute is commonly used in the context of authentication and authorization protocols such as OAuth or OpenID Connect to identify individual users. */
    //The if statement uses optional chaining (?) to avoid throwing an error if any of the properties are undefined or null.

    console.log("Post Confirmation Error No sub provided");
    return;
  }
  //Saving user to the Dynamo DB
  const now = new Date();
  const timestamp = now.getTime();
  const userItem = {
    __typename: { S: "User" },
    _lastChangedAt: { N: timestamp.toString() },
    _version: { N: "1" },
    createdAt: { S: now.toISOString() },
    updatedAt: { S: now.toISOString() },
    id: { S: event.request.userAttributes.sub },
    email: { S: event.request.userAttributes.email },
    firstName: { S: event.request.userAttributes.given_name },
    lastName: { S: event.request.userAttributes.family_name },
    phoneNumber: { S: event.request.userAttributes.phone_number },
  };
  const userParams = {
    Item: userItem,
    TableName: userTableName,
  };

  try {
    //save the new user to Dynamo DB
    await db.putItem(userParams).promise();
    console.log("Successfully stored user in the database");
  } catch (e) {
    console.log("FOUND ERROR--->  ", e);
  }

  //Saving mentee/mentor to the Dynamo DB
};
