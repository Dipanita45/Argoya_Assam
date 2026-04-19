import React from "react";
import { Container, Section, H1, P } from "@/components/shared/design-system";

export default function Dashboard() {
    return (
        <Section>
            <Container>
                <div className="space-y-4">
                    <H1>User Dashboard</H1>
                    <P className="text-muted-foreground text-lg">
                        Welcome back to Arogya Assam. Manage your healthcare screenings and appointments here.
                    </P>
                </div>
            </Container>
        </Section>
    );
}
