import CreditForm from "@/components/admin/credit/CreditForm";
import LinkToPublicView from "@/components/globals/LinkToPublicView";

const AdminCreditPage = () => {
  return (
    <div className="p-4 md:p-10">
      <div className=" flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          MANAGE Credits{" "}
        </h1>
        <LinkToPublicView path="/credits" />
      </div>
      <CreditForm />
    </div>
  );
};

export default AdminCreditPage;
