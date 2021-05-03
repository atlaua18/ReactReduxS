import React from "react";

export class ProductCard extends React.Component<{}, {}> {
    public str: string;

    constructor(props: {}) {
        super(props);
        this.str = "bla-bla";
    }

    public componentDidMount() {
        console.log("Component did mount");
    }

    public componentDidUpdate() {
        console.log("Component did update");
    }
    
    public render() {
        return <div>{this.str}</div>
    }
}