import React, { useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { useSelector, useDispatch } from "react-redux";

export default function Footer() {
    const dark = useSelector((state) => state.dark);
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.dark === "false") {
            dispatch({ type: "LIGHT_MODE" });
        } else {
            dispatch({ type: "DARK_MODE" });
        }
    }, [dark, dispatch]);

    return (
        <footer className="w-full mt-10 transition-all duration-300 h-52 bg-light_primary dark:bg-dark_primary">
            <div className="container flex flex-col items-center justify-center h-full mx-auto text-gray-700 transition-all duration-300 dark:text-gray-200 bg-light_primary dark:bg-dark_primary">
                <div className="py-3">
                    <SocialIcon
                        bgColor={dark ? "#f3f4f6" : "#374151"}
                        style={{ height: "30px", width: "30px" }}
                        url="https://github.com/shallowvernal"
                        target={"_blank"}
                        rel="noreferrer"
                        className="mx-3 text-black"
                    />
                    <SocialIcon
                        bgColor={dark ? "#f3f4f6" : "#374151"}
                        style={{ height: "30px", width: "30px" }}
                        url="https://codepen.io/mfaqihridho"
                        target={"_blank"}
                        rel="noreferrer"
                        className="mx-3"
                    />
                    <SocialIcon
                        bgColor={dark ? "#f3f4f6" : "#374151"}
                        style={{ height: "30px", width: "30px" }}
                        url="https://www.instagram.com/rizaedtz01/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="mx-3"
                    />
                </div>
                <h5 className="mb-3 text-xl md:mb-5">Ahmad Riza © 2024</h5>
                <div className="w-full h-0.5 bg-gray-700 dark:bg-gray-200 mb-2"></div>
                <p className="mb-2">
                    Powered By{" "}
                    <a
                        href="https://jikan.moe"
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                    >
                        shallow API
                    </a>
                </p>

                <p className="text-center">
                    <a
                        href="https://www.flaticon.com/free-icons/find"
                        title="find icons"
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2"
                    >
                        Find icons created by shallowvernal - Flaticon
                    </a>
                </p>
            </div>
        </footer>
    );
}
