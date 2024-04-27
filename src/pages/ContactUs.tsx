import {Table} from "../components/molecules";
import {contactUsColumn} from "../data/tableColumn/contact-us/contactUs.column";

const ContactUs = () => {

  return (
    <>
      <div className="flex justify-end">
      </div>
      <Table
        column={contactUsColumn}
        data={[]}
        isLoading={false}
      />

    </>
  );
};
export default ContactUs;
