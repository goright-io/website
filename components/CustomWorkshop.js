import { Text, Icon, Button } from "@goright/design-system";
import SectionTitle from "@components/SectionTitle";

export default function CustomWorkshop() {
  return (
    <div className="max-w-4xl mx-auto mt-28">
      <SectionTitle icon="ChartMarimekko32">
        Want a custom workshop for your team?
      </SectionTitle>
      <Text variant="xlBolder" className="flex mt-16">
        Need a custom version? We can tailor this workshop for your company.
        When focused on your product and taking into account your team shape,
        the workshop outcome is not only a training session but also your design
        system's kick-off. We’ll walk through the design system process, how to
        get started and how to fit it into your existing design processes. There
        will be an opportunity for the team to discuss questions they might have
        about implementing a design system.
      </Text>
      <Button
        className="justify-center w-64 mt-8"
        label="Let's talk"
        as="a"
        href="mailto:hello@goright.io"
        target="_blank"
        rel="noopener"
      />
    </div>
  );
}
