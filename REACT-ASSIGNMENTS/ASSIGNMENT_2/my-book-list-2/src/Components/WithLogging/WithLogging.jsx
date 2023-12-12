import React from 'react';

const WithLogging = WrappedComponent => {
    return class extends React.Component {
        componentDidMount() {
            console.log(`The component ${WrappedComponent.name} has been rendered.`);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
};

export default WithLogging;
