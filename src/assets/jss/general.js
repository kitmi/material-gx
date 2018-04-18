export { $hBox, $vBox, $hAlignInVBox, $vAlignInHBox } from "./flex"

const transition = {
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
}

const containerFluid = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    "&:before,&:after": {
        display: "table",
        content: '" "'
    },
    "&:after": {
        clear: "both"
    }
}

export { transition, containerFluid }
