import CreditForm from "@/components/admin/credit/CreditForm";

const AdminCreditPage = () => {
  return (
    <div className="p-10 ">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        MANAGE Credits{" "}
      </h1>
      <CreditForm />
    </div>
  );
};

export default AdminCreditPage;
