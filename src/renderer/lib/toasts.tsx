import toast from 'react-hot-toast';
import { getLang } from './loaders';

const appLang = getLang();
const defaultToastStyle = {
    fontSize: '13px',
    borderRadius: '10px',
    background: '#333',
    color: '#fff'
};

export const defaultToast = (msg = '', id = 'ID', duration = 5000) => {
    toast(msg, {
        id: id,
        duration: duration,
        style: defaultToastStyle
    });
};

export const defaultToastWithSubmitButton = (
    msg = '',
    submitTitle = '',
    id = 'ID',
    duration = 5000,
    onSubmitCallBack = () => {}
) => {
    toast(
        (currentToast) => (
            <>
                <div className='customToast'>
                    <p>{msg}</p>
                    <button
                        onClick={() => {
                            toast.dismiss(currentToast?.id);
                            onSubmitCallBack();
                        }}
                    >
                        {submitTitle}
                    </button>
                </div>
            </>
        ),
        {
            id: id,
            duration: duration,
            style: defaultToastStyle
        }
    );
};

export const checkInternetToast = () => {
    defaultToast(appLang?.toast?.offline, 'ONLINE_STATUS', Infinity);
};

let doNotShowSettingsHaveChangedToastInCurrentSession = false;
export const settingsHaveChangedToast = ({
    isConnected,
    isLoading
}: {
    isConnected: boolean;
    isLoading: boolean;
}) => {
    if (doNotShowSettingsHaveChangedToastInCurrentSession) return;
    if (isConnected || isLoading) {
        defaultToastWithSubmitButton(
            appLang?.toast?.settings_changed,
            // TODO i18n
            'متوجه شدم',
            'SETTINGS_CHANGED',
            3000,
            () => {
                doNotShowSettingsHaveChangedToastInCurrentSession = true;
            }
        );
    }
};

export const loadingToast = () => {
    toast.loading(appLang?.toast?.please_wait, {
        id: 'LOADING',
        duration: Infinity,
        style: defaultToastStyle
    });
};
