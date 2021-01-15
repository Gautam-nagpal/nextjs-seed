import React from 'react';


export default function CustomModal() {
    const modal = useSelector(state => state.common.modal);


    switch (modal) {
        case "NOT_LOGIN":
            return <RenderModalWithComponent component={NotLogin} />

        default:
            return null
    }
}


const RenderModalWithComponent = ({ component: Component, maxWidth = "sm", customFunction = () => { }, className = "", ...rest }) => {
    return (
        <>
            <Dialog maxWidth={maxWidth} className={className} customFunction={customFunction} fullWidth>
                <Component {...rest} />
            </Dialog>
        </>
    )
}