import { Toaster } from 'react-hot-toast';
import 'react-modern-drawer/dist/index.css';
import useLanding from './useLanding';
import LandingDrawer from './LandingDrawer';
import LandingHeader from './LandingHeader';
import LandingBody from './LandingBody';

export default function Landing() {
    const {
        appLang,
        drawerIsOpen,
        ipData,
        lang,
        proxyMode,
        handleMenuOnKeyDown,
        handleOnClickIp,
        handleOnClickPing,
        handleOnSwipedLeft,
        handleOnSwipedRight,
        hasNewUpdate,
        ipInfo,
        isConnected,
        isLoading,
        onSubmit,
        ping,
        statusText,
        toggleDrawer,
        proxyStatus
    } = useLanding();

    return (
        <>
            <LandingHeader
                handleMenuOnKeyDown={handleMenuOnKeyDown}
                hasNewUpdate={hasNewUpdate}
                toggleDrawer={toggleDrawer}
            />
            <LandingDrawer
                appLang={appLang}
                drawerIsOpen={drawerIsOpen}
                lang={lang}
                toggleDrawer={toggleDrawer}
                hasNewUpdate={hasNewUpdate}
            />
            <LandingBody
                appLang={appLang}
                handleOnClickIp={handleOnClickIp}
                handleOnClickPing={handleOnClickPing}
                handleOnSwipedLeft={handleOnSwipedLeft}
                handleOnSwipedRight={handleOnSwipedRight}
                ipData={ipData}
                ipInfo={ipInfo}
                isConnected={isConnected}
                isLoading={isLoading}
                onSubmit={onSubmit}
                ping={ping}
                proxyMode={proxyMode}
                statusText={statusText}
                proxyStatus={proxyStatus}
            />
            <Toaster position='bottom-center' reverseOrder={false} />
        </>
    );
}
