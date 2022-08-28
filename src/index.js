import { faker } from "@faker-js/faker";
import React from "react";
import { createRoot } from 'react-dom/client';
import ComponentDetail from './ComponentDetail.js';
import { Faker } from "@faker-js/faker";
import ApprovalCard from "./ApprovalCard.js";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard >
                <ComponentDetail author="Sam" timeAgo="Todat at 4:45PM" text={faker.lorem.words()} avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard >
                <ComponentDetail author="Sam" timeAgo="Todat at 4:45PM" text={faker.lorem.words()} avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard >
                <ComponentDetail author="Sam" timeAgo="Todat at 4:45PM" text={faker.lorem.words()} avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard >
                <ComponentDetail author="Sam" timeAgo="Todat at 4:45PM" text={faker.lorem.words()} avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
