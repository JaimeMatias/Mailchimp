import client from "@mailchimp/mailchimp_marketing";

// Configure Mailchimp client
client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

export const addListMember = async (email: any) => {
  try {
    // Call Mailchimp API to add member to list
    const groupId = process.env.MAILCHIMP_GROUP_ID || "";
    const response = await client.lists.addListMember(groupId, {
      email_address: email,
      status: "subscribed",
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
