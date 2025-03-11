import moment from "moment";

const ResetBtn = ({ setSelectedEnglishDate, onChange }) => {
  const handleReset = () => {
    const currentEnglishDate = moment().format("YYYY/MM/DD");
    setSelectedEnglishDate(currentEnglishDate);
    onChange(currentEnglishDate);
  };

  return (
    <button className="reset-btn" onClick={handleReset}>
      Go to Today
    </button>
  );
};

export default ResetBtn;
