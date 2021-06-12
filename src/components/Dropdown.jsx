import { Menu } from '@headlessui/react'
import DropdownTransition from "./DropdownTransition";

const Dropdown = () => {
    return (
        <Menu>
            <Menu.Button className="focus:outline-none">More</Menu.Button>

            <DropdownTransition>
                <Menu.Items>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`${active && 'bg-blue-500'}`}
                                href="/account-settings"
                            >
                                Jacob
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`${active && 'bg-blue-500'}`}
                                href="/account-settings"
                            >
                                Goodwin
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`${active && 'bg-blue-500'}`}
                                href="/account-settings"
                            >
                                Marielle
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`${active && 'bg-blue-500'}`}
                                href="/account-settings"
                            >
                                Loic
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`${active && 'bg-blue-500'}`}
                                href="/account-settings"
                            >
                                Onesine
                            </a>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </DropdownTransition>
        </Menu>
    );
};

export default Dropdown;