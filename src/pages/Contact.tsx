import { useEffect } from "react";
import { GitHubIcon, GmailIcon, LinkedInIcon } from "../components/Icon";
// import Button from "../components/Button";
// import Field from "../components/Field";
// import Alert from "../components/Alert";
// import Divider from "../components/Divider";
// import api from "../lib/api";

// interface AlertObject {
//     message: string;
//     variant: "Success" | "Error" | "Warning" | "Info" | "Neutral";
//     isOpen: boolean;
// }

// const isEmailValid = (email: string) => {
//     const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return email.match(regex);
// }

export default function Contact() {
  // const [name, setName] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [message, setMessage] = useState<string>("");
  // const [alert, setAlert] = useState<AlertObject>({ message: "", variant: "Neutral", isOpen: false });
  // const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    try {
      document.title = "Contact | Faisal Hakimi";
      const layout = document.getElementById("layout-content");
      if (layout) layout.scrollTop = 0;
    } catch (error) {}
  }, []);

  return (
    <div className="px-6 py-6 h-full">
      <div className="flex items-center justify-center gap-6 max-w-xl m-auto h-full">
        <a
          href="https://www.linkedin.com/in/faisal-hakimi"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className="fill-white slide-in-left" />
        </a>
        <a
          href="https://github.com/iamfaisalh"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon className="fill-white slide-in-top" />
        </a>
        <a
          href="mailto:faisalhakimi101@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <GmailIcon className="fill-white slide-in-right" />
        </a>
      </div>
    </div>
  );

  // const onSubmit = async (e: any) => {
  //     try {
  //         e.preventDefault();
  //         if (disabled) return;
  //         setDisabled(true);

  //         const body = { name: name.trim(), email: email.trim(), message: message.trim() };

  //         if (body.name.length === 0) throw new Error("Name is required.");
  //         if (body.email.length === 0) throw new Error("Email is required.");
  //         if (!isEmailValid(body.email)) throw new Error("Email is invalid.");
  //         if (body.message.length === 0) throw new Error("Message is required.");

  //         const response = await api({ url: "/contact", method: "POST", data: body });
  //         const { data } = response;

  //         setName("");
  //         setEmail("");
  //         setMessage("");
  //         setDisabled(false);
  //         return setAlert({ message: data.message, variant: "Success", isOpen: true });
  //     } catch (error: any) {
  //         setDisabled(false);
  //         return setAlert({ message: error?.data?.message ? error.data.message : error?.message ? error.message : "Something went wrong.", variant: "Error", isOpen: true });
  //     }
  // }
  // return (
  //     <div className="px-6 py-6">
  //         <div className="flex items-center mt-3 justify-center gap-6 max-w-xl mx-auto">
  //             <a href="https://www.linkedin.com/in/faisal-hakimi" target="_blank" rel="noreferrer" ><LinkedInIcon className="fill-white slide-in-left" /></a>
  //             <a href="https://github.com/iamfaisalh" target="_blank" rel="noreferrer"><GitHubIcon className="fill-white slide-in-top" /></a>
  //             <a href="mailto:faisalhakimi101@gmail.com" target="_blank" rel="noreferrer"><GmailIcon className="fill-white slide-in-right" /></a>
  //         </div>
  //         <Divider label={"Or send a direct message"} />
  //         <form className="mx-auto max-w-xl" onSubmit={onSubmit}>
  //             {alert.isOpen ? <Alert className=" mb-4" variant={alert.variant} message={alert.message} onClose={() => setAlert(prev => ({ ...prev, isOpen: false }))} isClosable /> : null}
  //             <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
  //                 <Field label={"Name"} labelFor={"name"} inputProps={{ type: "text", name: "name", id: "name", autoComplete: "name", value: name, onChange: (e) => setName(e.target.value) }} />
  //                 <Field label={"Email"} labelFor={"email"} inputProps={{ type: "email", name: "email", id: "email", autoComplete: "email", value: email, onChange: (e) => setEmail(e.target.value) }} />
  //                 <Field label={"Message"} labelFor={"message"} textareaProps={{ name: "message", value: message, id: "message", onChange: (e) => setMessage(e.target.value) }} />
  //             </div>
  //             <div className="mt-7">
  //                 <Button disabled={disabled} type={"submit"} variant={"Primary"}>Submit</Button>
  //             </div>
  //         </form>
  //     </div>
  // );
}
