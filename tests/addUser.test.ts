import { error } from "console";
import { request } from "graphql-request";
import { host } from "./constants";

const email = "ousa@bob.com";
const password = "jalksdf";

const addUserMutation = `
mutation {
  addUser(userInput:{email: "${email}", password: "${password}"})
}
`;


test("add user", async () => {
  const response = await request(host, addUserMutation);
  expect(response).toEqual({addUser : true});
  
});





  test("Test description", () => {
    const t = () => {
      throw new TypeError("UNKNOWN ERROR");
    };
    expect(t).toThrow(TypeError);
    expect(t).toThrow("UNKNOWN ERROR");
  });
  
  test("user exsist already", () => {
    const t = () => {
      throw new TypeError("user exsist already");
    };
    expect(t).toThrow(TypeError);
    expect(t).toThrow("user exsist already");
  });



