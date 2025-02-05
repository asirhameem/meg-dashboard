import {
  AppShell,
  Avatar,
  Burger,
  Flex,
  Group,
  NavLink,
  ScrollArea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Button } from "./Button";
import { useAuthClear } from "../hooks";
import { Logo } from "../assets";

export const DashboardLayout = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const { onLogout } = useAuthClear();
  const location = useLocation();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Flex align="center" h="100%" justify="space-between">
          <Group h="100%" px="md">
            <Burger
              opened={mobileOpened}
              onClick={toggleMobile}
              hiddenFrom="sm"
              size="sm"
            />
            <Burger
              opened={desktopOpened}
              onClick={toggleDesktop}
              visibleFrom="sm"
              size="sm"
            />
            <Logo height={30} width={50} />
            {/* <Flex justify="center" align="center" gap="xs">
              <Text fw="bold">MA Enterprise</Text>
            </Flex> */}
          </Group>
          <Group h="100%" px="md">
            <Avatar color="cyan" radius="xl">
              MEG
            </Avatar>
          </Group>
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {/* <AppShell.Section>Navbar header</AppShell.Section> */}
        <AppShell.Section grow my="md" component={ScrollArea}>
          <>
            {/* dashboard */}
            <NavLink
              label={
                <Link
                  to="/dashboard"
                  className="link-clean"
                  data-active={location.pathname === "/dashboard"}
                >
                  Dashboard
                </Link>
              }
              // leftSection={<IconGauge size="1rem" stroke={1.5} />}
              childrenOffset={28}
              active={location.pathname === "/dashboard"}
            />
            {/* products */}
            <NavLink
              label="Products"
              // leftSection={<IconGauge size="1rem" stroke={1.5} />}
              childrenOffset={28}
              active={location.pathname.includes("/products/")}
            >
              <NavLink
                label={
                  <Link
                    to="/products"
                    className="link-clean"
                    data-active={location.pathname === "/products"}
                  >
                    Product List
                  </Link>
                }
              />
              <NavLink
                label={
                  <Link
                    to="/products/create"
                    className="link-clean"
                    data-active={location.pathname === "/products/create"}
                  >
                    Product Create
                  </Link>
                }
              />
            </NavLink>

            {/* specification */}
            <NavLink
              label="Specifications"
              // leftSection={<IconGauge size="1rem" stroke={1.5} />}
              childrenOffset={28}
              active={
                location.pathname === "/specifications" ||
                location.pathname === "/specifications/categories"
              }
            >
              <NavLink
                label={
                  <Link
                    to="/specifications"
                    className="link-clean"
                    data-active={location.pathname === "/specifications"}
                  >
                    Specification List
                  </Link>
                }
              />
              <NavLink
                label={
                  <Link
                    to="/specifications/categories"
                    className="link-clean"
                    data-active={
                      location.pathname === "/specifications/categories"
                    }
                  >
                    Specification Category
                  </Link>
                }
              />
            </NavLink>

            {/* configuration */}
            <NavLink
              label="Configurations"
              // leftSection={<IconGauge size="1rem" stroke={1.5} />}
              childrenOffset={28}
              active={location.pathname.includes("/configurations")}
            >
              <NavLink
                label={
                  <Link
                    to="/products/categories"
                    className="link-clean"
                    data-active={location.pathname === "/products/categories"}
                  >
                    Product Category List
                  </Link>
                }
              />
              <NavLink
                label={
                  <Link
                    to="/configurations/paints"
                    className="link-clean"
                    data-active={location.pathname === "/configurations/paints"}
                  >
                    Paints List
                  </Link>
                }
              />
              <NavLink
                label={
                  <Link
                    to="/configurations/wheels"
                    className="link-clean"
                    data-active={location.pathname === "/configurations/wheels"}
                  >
                    Wheels List
                  </Link>
                }
              />
              <NavLink
                label={
                  <Link
                    to="/configurations/interior-colors"
                    className="link-clean"
                    data-active={
                      location.pathname === "/configurations/interior-colors"
                    }
                  >
                    Interior Colors List
                  </Link>
                }
              />
              <NavLink
                label={
                  <Link
                    to="/configurations/platform-info"
                    className="link-clean"
                    data-active={
                      location.pathname === "/configurations/platform-info"
                    }
                  >
                    Platform Info
                  </Link>
                }
              />
            </NavLink>

            {/* orders */}
            <NavLink
              label="Orders"
              // leftSection={<IconGauge size="1rem" stroke={1.5} />}
              childrenOffset={28}
              active={location.pathname.includes("/orders")}
            >
              <NavLink
                label={
                  <Link
                    to="/orders"
                    className="link-clean"
                    data-active={location.pathname === "/orders"}
                  >
                    Order List
                  </Link>
                }
              />
            </NavLink>

            {/* quotation */}
            <NavLink
              label={
                <Link
                  to="/quotations"
                  className="link-clean"
                  data-active={location.pathname === "/quotations"}
                >
                  Quotation
                </Link>
              }
              // leftSection={<IconGauge size="1rem" stroke={1.5} />}
              childrenOffset={28}
              active={location.pathname === "/quotations"}
            />

            {/* brochure */}
            <NavLink
              label={
                <Link
                  to="/brochures"
                  className="link-clean"
                  data-active={location.pathname === "/brochures"}
                >
                  Brochures
                </Link>
              }
              // leftSection={<IconGauge size="1rem" stroke={1.5} />}
              childrenOffset={28}
              active={location.pathname === "/brochures"}
            />
          </>
        </AppShell.Section>
        <AppShell.Section>
          <Button variant="outline" fullWidth onClick={onLogout}>
            Logout
          </Button>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
