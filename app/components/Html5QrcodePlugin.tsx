import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useRef } from 'react';

const qrcodeRegionId = "html5qr-code-full-region";

interface Html5QrcodePluginProps {
    fps?: number;
    qrbox?: number;
    aspectRatio?: number;
    disableFlip?: boolean;
    verbose?: boolean;
    qrCodeSuccessCallback: (decodedText: string, decodedResult: any) => void;
}

const createConfig = (props: Html5QrcodePluginProps) => {
    let config: any = {};
    if (props.fps) config.fps = props.fps;
    if (props.qrbox) config.qrbox = props.qrbox;
    if (props.aspectRatio) config.aspectRatio = props.aspectRatio;
    if (props.disableFlip !== undefined) config.disableFlip = props.disableFlip;
    return config;
};

const Html5QrcodePlugin: React.FC<Html5QrcodePluginProps> = (props) => {
    const scannerRef = useRef<Html5QrcodeScanner | null>(null);

    useEffect(() => {
        const config = createConfig(props);
        const verbose = props.verbose === true;
    
        const dummyErrorCallback = (errorMessage: string) => {
            console.warn(`QR Code scanning error: ${errorMessage}`);
        };
    
        if (!scannerRef.current) {
            scannerRef.current = new Html5QrcodeScanner(qrcodeRegionId, config, verbose);
            scannerRef.current.render(
                (decodedText, decodedResult) => {
                    props.qrCodeSuccessCallback(decodedText, decodedResult);
                    scannerRef.current?.clear().catch(console.error);
                },
                dummyErrorCallback
            );
            
            const element = document.getElementById(qrcodeRegionId);
            if (element) {
                element.classList.add('ready');
            }
        } else {
            scannerRef.current.render(
                (decodedText, decodedResult) => {
                    props.qrCodeSuccessCallback(decodedText, decodedResult);
                    scannerRef.current?.clear().catch(console.error);
                },
                dummyErrorCallback
            );
        }
    
        return () => {
            scannerRef.current?.clear().catch(error => {
                console.error("Failed to clear html5QrcodeScanner. ", error);
            });
        };
    }, [props]);
    
    return <div id={qrcodeRegionId} />;
};

export default Html5QrcodePlugin;