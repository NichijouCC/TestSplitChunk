import React from "react";

interface Iprops {
    importComp: () => Promise<any>,
    compProps?: any
}

export class AsyncComp extends React.Component<Iprops, { comp: any }> {
    state = {
        comp: null
    }
    componentDidMount() {
        this.importComp(this.props);
    }
    componentWillUpdate(nextProps, nextState) {
        if (nextProps.importComp != this.props.importComp) {
            this.importComp(nextProps);
        }
    }
    private importComp(props: Iprops) {
        props.importComp()
            .then(res => {
                if (res.default == null) {
                    console.warn("AsyncComp importComp value need to be default export!");
                } else {
                    this.setState({ comp: res.default })
                }
            })
            .catch(err => console.error("failed to import component"))
    }
    render() {
        let Comp = this.state.comp;
        return (Comp ? <Comp {...this.props.compProps} /> : null)
    }
}