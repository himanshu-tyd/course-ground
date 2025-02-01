import { useState } from "react";
import WrapperContainer from "../components/WrapperContainer";
import TextInput from "../components/TextInput";
import { getContextData } from "../context/AuthContexProvider";
import Button from "../components/Button";
import { useChangePassword } from "../hooks/useChangePassword";
import { LoaderIcon } from "lucide-react";

const Settings = () => {
  const [active, setActive] = useState(0);
  const [passwords, setPasswords] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  const { user } = getContextData();
  const { loading, changePassword } = useChangePassword();
  const fullName = `${user.firstName} ${user.lastName}`;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPasswords({ ...passwords, [name]: value });
  };

  const handleSubmit = async () => {
    await changePassword(passwords);
  };

  return (
    <WrapperContainer containerClass={``}>
      <div className="flex gap-5 flex-row border-b py-4 border-b-gray w-full justify-center sm:justify-start  ">
        {links.map((item, index) => (
          <span
            key={index}
            className={`font-clash-regular cursor-pointer hover:bg-yellow px-4 py-2 rounded-full duration-300 drop-shadow-sm active:scale-100 hover:scale-105  ${
              active === index ? "bg-yellow shadow-sm" : "bg-none"
            }`}
            onClick={() => setActive(index)}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-col gap-5">
        {active === 0 && (
          <>
            <TextInput lable={"full name"} value={fullName} isReadOnly={true} />
            <TextInput
              lable={"email address"}
              value={user.email}
              isReadOnly={true}
            />
          </>
        )}

        {active == 1 && (
          <>
            <TextInput
              type={"password"}
              value={passwords.current_password}
              handleChange={handleChange}
              placeholder={"*********"}
              lable={"Current Password"}
              name={"current_password"}
            />
            <TextInput
              type={"password"}
              value={passwords.new_password}
              handleChange={handleChange}
              name={"new_password"}
              lable={"new password"}
              placeholder={"*********"}
            />
            <TextInput
              type={"password"}
              handleChange={handleChange}
              name={"confirm_password"}
              lable={"confirm password"}
              placeholder={"*********"}
              value={passwords.confirm_password}
            />
            <Button
              lable={loading ? <LoaderIcon className="animate-spin" />  : 'Save Password'}
              handleClick={handleSubmit}
              containerClass={
                " mt-10 bg-dark max-w-[200px]  text-white rounded-full "
              }
            />
          </>
        )}
      </div>
    </WrapperContainer>
  );
};

export default Settings;

const links = ["General", "Security"];
