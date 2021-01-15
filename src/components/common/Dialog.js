import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import * as commonActions from "@actions/common";

import Slide from '@material-ui/core/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction={!props.is_edit ? "down" : "left"} ref={ref} {...props} />;
});

export default function (props) {
    const { children, customFunction = () => { }, maxWidth, className = "" } = props;
    const [open, setModalOpen] = useState(true)
    const dispatch = useDispatch();

    function handleClose() {
        setModalOpen(false)
        dispatch(commonActions.closeCustomModalDialog())
        customFunction();
    }

    return (
        <div className="">
            <Dialog
                TransitionComponent={Transition}
                TransitionProps={{ "is_edit": maxWidth == "md" ? true : undefined }}
                open={open} onClose={handleClose}
                aria-labelledby="form-dialog-title"
                maxWidth={maxWidth}
                className={maxWidth == "md" ? "right-side-modal-foredit" : ""}
            >
                <DialogTitle className="modal-title">
                    <IconButton onClick={handleClose} className="close">
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent className={`${className} dailogBox`}>
                    {children}
                </DialogContent>
            </Dialog>
        </div>
    );
}
