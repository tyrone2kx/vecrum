import {
  CloudIcon,
  MailIcon,
} from "../../assets/icons/icons";
import Input from "../../components/Input";
import Radio from "../../components/Radio";
import Spacer from "../../components/Spacer";
import Tab from "../../components/Tab";
import CardDetails from "./components/CardDetails";
import Table from "./components/Table";

const settings = [
  "My details",
  "Profile",
  "Password",
  "Team",
  "Plan",
  "Billing",
  "Notifications",
  "Integrations",
  "API",
];

const SettingsScreen = () => {
  return (
    <div className="">
      <div className="my-5 md:my-0">
        <h1 className="text-blackText mb-1 text-2xl md:text-3xl">Settings</h1>
        <p className="text-greyText text-base">
          Manage your team and preferences here.
        </p>
      </div>

      <Tab defaultActive="Billing">
        {settings.map((item, index) => (
          <div key={item} title={item}>
            {item === "Billing" ? (
              <>
                <div className="my-4">
                  <h1 className="text-blackText mb-1 text-lg font-medium">
                    Payment Method
                  </h1>
                  <p className="text-greyText text-sm">
                    Update your billing details and address.
                  </p>
                </div>

                <Spacer />

                <div className="flex my-6 flex-col md:flex-row">
                  <div className="mb-4 w-full md:w-1/4 md:mr-4">
                    <p className="text-secText mb-1 text-sm">Contact email</p>
                    <p className="text-greyText text-sm">
                      Where should invoices be sent?
                    </p>
                  </div>

                  <div>
                    <div className="flex items-start">
                      <Radio id="radio1" name="mail" />
                      <div className="ml-2">
                        <p className="text-secText text-sm">
                          Send to my account email
                        </p>
                        <p className="text-greyText text-sm">
                          olivia@untitledui.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start my-4">
                      <Radio id="radio2" name="mail" />
                      <div className="ml-2">
                        <p className="text-secText text-sm">
                          Send to an alternative email
                        </p>
                        <div>
                          <Input
                            my="my-2"
                            bg="bg-white"
                            placeholder="Enter email"
                            // type="email"
                            Icon={MailIcon}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Spacer />

                <CardDetails />

                <div className="my-6 flex flex-col md:flex-row justify-between">
                  <p className="text-blackText mb-1 text-lg">Billing History</p>

                  <button className="bg-white w-fit rounded-md p-2 px-4 border drop-shadow-sm">
                    <div className="flex items-center">
                      <CloudIcon />
                      <p className="ml-2 text-sm">Download all</p>
                    </div>
                  </button>
                </div>
                <Table />
              </>
            ) : (
              <h1 className="text-blackText mb-1 text-lg font-medium">
                {item}
              </h1>
            )}
          </div>
        ))}
      </Tab>
    </div>
  );
};

export default SettingsScreen;
