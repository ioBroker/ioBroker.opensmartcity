declare global {
    interface Window {
        sentryDSN: string | undefined;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        grey: true;
    }
}

export {};
