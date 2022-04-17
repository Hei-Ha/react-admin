import React, {useState} from "react";
import { Layout } from 'antd';
import { Sidebar } from "@/components/layout/component/Sidebar";
import { ContentContainer } from "@/components/layout/component/content";

export const LayoutContainer = (): JSX.Element => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const handleCollapsed = () => {
        setCollapsed(!collapsed)
    }
    return <Layout>
        <Sidebar
            collapsed={collapsed}
        />
        <ContentContainer
            collapsed={collapsed}
            handleCollapsed={handleCollapsed}
        />
    </Layout>
}