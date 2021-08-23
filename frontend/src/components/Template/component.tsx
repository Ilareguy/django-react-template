import * as React from "react";
import {PropsWithChildren} from "react";
import {useTranslation} from "react-i18next";

interface PrivateProps
{
    t: any;
    i18n: any;
}

export interface PublicProps
{
}

type Props = PublicProps | PrivateProps;

type State = {}

class KijComponent extends React.Component<Props, State>
{
    constructor(props: Readonly<Props>)
    {
        super(props);
    }

    componentDidMount()
    {
    }

    componentWillUnmount()
    {
    }

    t(key: string): string
    {
        return (this.props as PrivateProps).t(key);
    }

    render()
    {
        return (<div className={"p-2 bg-gray-100 rounded-lg"}>{this.t("hello")}</div>);
    }
}

export const Component: React.FC<Props> = (props: PropsWithChildren<Props>) =>
{
    const {t, i18n} = useTranslation();

    return (
        <KijComponent t={t} i18n={i18n} {...props}>{props.children}</KijComponent>
    );
};
