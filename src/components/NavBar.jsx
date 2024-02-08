import React, { useEffect, useState } from "react";
import {
  Link,
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Switch,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Image,
} from "@nextui-org/react";
import { MoonIcon } from "../Icons/MoonIcon.jsx";
import { SunIcon } from "../Icons/SunIcon.jsx";
//import { AcmeLogo } from "../AcmeLogo.jsx";
import Logo from "../img/Logo2.png";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "../Icons/Icons.jsx";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [theme, setTheme] = useState("purpple-dark");
  let pathName = window.location.pathname;
  const phoneNumber = 123456789;
  const message = "Hola! estoy interesado en desarrollar mi sitio web";

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    whatsapp: (
      <Image
        className="text-warning"
        fill="currentColor"
        src="https://cdn.icon-icons.com/icons2/840/PNG/96/Whatsapp_icon-icons.com_66931.png"
        alt="whatsapp"
        width={"40px"}
      />
    ),
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    gmail: (
      <Image
        className="text-secondary"
        fill="currentColor"
        src="https://cdn.icon-icons.com/icons2/2631/PNG/96/gmail_new_logo_icon_159149.png"
        alt="gmail"
        width={"40px"}
      />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={40} />,
  };

  useEffect(() => {
    if (theme === "purple-dark") {
      document.documentElement.classList.add("purple-dark");
    } else {
      document.documentElement.classList.remove("purple-dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "purple-dark" ? "light" : "purple-dark");
  };

  const handleWhatsapp = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  const HandlescrollToSection = () => {
    // Obtén una referencia a la sección o elemento al que deseas desplazarte
    const section = document.getElementById("contacto");

    // Usa el método scrollIntoView para desplazar la página hasta la sección
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="hidden"
        />
        <NavbarBrand>
          <Link href="/APMC.github.io/" aria-current="page">
            <Image width="60px" src={Logo} alt="logo"></Image>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className=" sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Contacto
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="whatsapp"
              description="Contáctame con un solo click"
              startContent={icons.whatsapp}
              onClick={handleWhatsapp}
            >
              Whatsapp
            </DropdownItem>
            <DropdownItem
              className="hidden"
              key="gmail"
              description="Envíame un mensaje a mi correo electrónico"
              startContent={icons.gmail}
            >
              Gmail
            </DropdownItem>

            <DropdownItem
              key="General"
              description="Aquí tienes nuestros datos"
              startContent={icons.user}
              onClick={HandlescrollToSection}
            >
              Información general
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive={pathName === "/APMC.github.io/"}>
          <Link href="/APMC.github.io/" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathName === "/APMC.github.io/IA"}>
          <Link
            color="foreground"
            href="/APMC.github.io/IA"
            aria-current="page"
          >
            IA
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathName === "/APMC.github.io/Web"}>
          <Link
            color="foreground"
            href="/APMC.github.io/Web"
            aria-current="page"
          >
            Web
          </Link>
        </NavbarItem>
        <NavbarItem
          className="hidden"
          isActive={pathName === "/APMC.github.io/Libreria"}
        >
          <Link color="foreground" href="/APMC.github.io/Libreria">
            Librería
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Switch
            className="hidden"
            defaultSelected
            size="lg"
            color="secondary"
            variant="shadow"
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <SunIcon className={className} />
              ) : (
                <MoonIcon className={className} />
              )
            }
            onClick={handleThemeSwitch}
          >
            {theme === "light" ? "Dark mode" : "Light mode"}
          </Switch>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
