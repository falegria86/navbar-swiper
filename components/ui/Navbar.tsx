"use client"

import { useRef, useEffect, RefObject } from "react";

import { usePathname } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
    Home as HomeIcon,
    BookMinus,
    CalendarCheck,
    CircleDollarSign,
    Folder,
    Mail
} from "lucide-react";

import { NavItem } from ".";

interface NavItem {
    url: string;
    icon: JSX.Element;
    title: string;
}

type Nav = NavItem[];

SwiperCore.use([Navigation]);

export const Navbar = () => {
    const swiperRef = useRef<any>(null);
    const pathname = usePathname();

    const navItems: Nav = [
        {
            url: "/",
            icon: <HomeIcon />,
            title: "Home"
        },
        {
            url: "/item",
            icon: <BookMinus />,
            title: "Item"
        },
        {
            url: "/item2",
            icon: <CalendarCheck />,
            title: "Item 2"
        },
        {
            url: "/item3",
            icon: <CircleDollarSign />,
            title: "Item 3"
        },
        {
            url: "/item4",
            icon: <Folder />,
            title: "Item 4"
        },
        {
            url: "/item5",
            icon: <Mail />,
            title: "Item 5"
        },
    ];


    useEffect(() => {
        if (swiperRef.current) {
            const index = navItems.findIndex(
                (item) => item.url === pathname
            );
            swiperRef.current.swiper.slideTo(index);
        }
    }, [pathname, navItems]);

    return (
        <nav>
            <div
                className={`w-full flex items-center border-b border-gray/25 px-5 md:px-8 py-5`}
            >
                <h1>Your Logo</h1>

                <Swiper
                    ref={swiperRef}
                    className="w-2/4 lg:w-3/4 swiper-navbar text-gray-500"
                    navigation
                    breakpoints={{
                        280: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4
                        },
                        1462: {
                            slidesPerView: 5
                        },
                    }}
                >

                    {navItems.map((item) => (
                        <SwiperSlide key={item.url}>
                            <NavItem
                                link={item.url}
                                icono={item.icon}
                                title={item.title}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </nav>
    )
}