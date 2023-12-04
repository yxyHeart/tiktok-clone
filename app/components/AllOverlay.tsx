"use client"


import AuthOverlay from "./AuthOverlay";
import EditProfileOverlay from "./profile/EditProfileOverlay";
import ClientOnly from "./ClientOnly";
import { useGeneralStore } from "../stores/general";

export default function AllOverlays() {
    let { isLoginOpen, isEditProfileOpen } = useGeneralStore();
    return (
        <>
            <ClientOnly>
                {isLoginOpen ? <AuthOverlay /> : null}
                {isEditProfileOpen ? <EditProfileOverlay /> : null}
            </ClientOnly>
        </>
    )
}