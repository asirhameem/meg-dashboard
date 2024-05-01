import {Table} from "../components/molecules";
import {contactUsColumn} from "../data/tableColumn/contact-us/contactUs.column";
import {useGetContactUsRequestsQuery} from "../store/features/contact-us/contactUsApi";

const ContactUs = () => {
  const {data, isLoading} = useGetContactUsRequestsQuery({});
  return (
    <>
      <Table
        column={contactUsColumn}
        data={data?.data || []}
        isLoading={isLoading}
      />
    </>
  );
};
export default ContactUs;
