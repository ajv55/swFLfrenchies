import {Html, Heading, Text} from '@react-email/components';

type EmailTemplateProps = {
    message: string,
    firstname: string,
    lastname: string,
    email: string
}

const EmailTemplate = ({message, firstname, lastname, email}: EmailTemplateProps) => {
    return (
        <Html lang='en'>
            <Heading as='h1'>Message from {firstname} {lastname}</Heading>
            <Text>Message: {message}</Text>
            <Text>Email: {email}</Text>
        </Html>
    )
}


export default EmailTemplate;