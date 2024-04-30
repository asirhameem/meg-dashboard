import {Table} from "../components/molecules";
import {contactUsColumn} from "../data/tableColumn/contact-us/contactUs.column";

const ContactUs = () => {

  return (
    <>
      <Table
        column={contactUsColumn}
        data={[]}
        isLoading={false}
      />
    </>
  );
};
export default ContactUs;
