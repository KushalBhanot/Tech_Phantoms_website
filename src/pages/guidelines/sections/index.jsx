import React from 'react'
import { Typography, Grid, Hidden, makeStyles, Paper } from '@material-ui/core'

const useStyle=makeStyles({
    container:{
        padding:'20px',
    },
    headingstyles:{
        background:'tomato',
        padding:'10px'
    },
    report:{
        background:'black',
        color:'lightgreen',
        '&:a':{
            color:'white'
        },
    },
    content:{
        padding:'20px',
    }
})

const Guidelines = (props) => {
    const Navbar = props.navbar;
    const classes=useStyle();

    return (<div>
    <Hidden mdDown>
        <Navbar />
        </Hidden>
        <div className={classes.container} >
        <center>
        <Grid alignContent="center" container>
            <Grid item xs={12} md={12} sm={12} lg={12}>
            <Typography variant="h4" gutterBottom="true">
                Tech Phantoms is an Open Source Organization.
                </Typography>
                <Paper className={classes.report}> <Typography gutterBottom="true" variant="h6" margin={5}>
               If any voilations or harrasment faced, please take a step ahead and report it to us:<br/> <a href="mailto:opensource@techphantoms.tech">opensource@techphantoms.tech</a>
                </Typography></Paper>
              <Typography gutterBottom="true" variant="h6" margin={5}>
                We intend to create an inclusive environment for everyone, regardless of ethnicity, religion, skin color, national origin, age, disability, sexual orientation, gender identity, parental status, marital status and political belonging as well as gender-specific expression, mental illness, socio-economic status or background. We are united by these values and uphold our unique differences.
                </Typography>
<Typography gutterBottom="true" className={classes.content}  variant="h6"> <Typography variant="h4" gutterBottom="true" className={classes.headingstyles}>  Introduction  </Typography>
We are dedicated to providing a harassment free experience for everyone, and we do not tolerate harassment of participants in any form. We ask you to be considerate of others and behave professionally and respectfully to all other participants.

This code and related procedures also apply to unacceptable behavior occurring outside the scope of community activities, in all community venues— online and in-person— as well as in all one-on-one communications, and anywhere such behavior has the potential to adversely affect the safety and well-being of community members.

Admins, Mentors, Contributers are subject to these Community Guidelines and Code of Conduct.

Diversity and inclusion make us strong. We encourage participation from the most varied and diverse backgrounds possible and want to be very clear about where we stand.

Our goal is to maintain a safe, helpful and friendly community for everyone, regardless of experience, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, nationality, or other protected categories under applicable law.


<Typography variant="h4" gutterBottom="true" className={classes.headingstyles}>EXPECTED BEHAVIOR </Typography>
Don't just support your colleagues on demand, be proactive. Offer your help if you notice that a team member is struggling with a problem or otherwise needs help. Be careful not to be too patronizing or disrespectful. When someone turns to you for help, always be open, listen and try to put yourself in the position of your counterpart. If you don't have time because of a deadline, let the person know and tell them openly when you have time or maybe refer a team member who is just as familiar with the topic.

You are expected to be thoughtful and considerate towards others. In this way we contribute to a collaborative, positive and healthy environment in which the team must:

Be inclusive
Be collaborative
Be professional
Be responsible
Be honest
Be welcoming
Be kind
Be respectful of other viewpoints and ideas
Be supportive and look out for each other
<Typography variant="h4" gutterBottom="true" className={classes.headingstyles}> UNACCEPTABLE BEHAVIOR </Typography>
We want to create a welcoming and friendly corporate culture for everyone. Discrimination and harassment are expressly prohibited. In addition, any behaviour or language that is exclusive or harassing is strongly rejected. Especially in the tech scene there exist behavior we don't like to see and that we would like to change:

- Don't be surprised if a team member is not yet familiar with a topic.
We believe in the spirit of a beginner and in the fact that one constantly wants to learn something new. It is absolutely okay to say "I don't know" or "I don't understand". The phrase "there are no stupid questions" is lived 100% by us, because that is the only way we learn. So please don't be surprised if someone is not familiar with a tool, a person or a process.

- No exclusive language
Be careful in your choice of words, no matter how banal it sounds. No, they are not only "great guys" at work, they are "great people" (including all as well). Sexist, racist, rejecting and excluding jokes are not appropriate and will not be tolerated in the team. Any kind of verbal harassment or bullying is just as strongly rejected.

- No "know-it-all" statements:
When someone says something that is almost, but not entirely correct, one tends to add a correction to what has been said before. We should always strive to save the face of others and uphold our values. In most cases, these "know-it-all" statements are not decisive for the overall conversation and are not goal-oriented, but rather annoying and a waste of time. If it is important in your eyes, then use a language that leaves others with the impression that you might be wrong or missed something important out of context and therefore take a different view now.

- No subtle comments:
Exclusive behavior is often characterized by subtle comments. To say, "It's so easy that my daughter can do it" is a discriminating statement. Regardless of the intention of this statement, they have a very humiliating effect on other team members.If you notice something like this in someone, then you should point it out to the person publicly or privately. If you can't because you may be too involved, ask your team leader or management to say something.

- Harassment may include but not limited to the following:
Offensive, inappropriate, or unwanted comments related to gender, sexual orientation, disability, physical appearance, body size, race, ethnicity, national origin, religion, or age, or other protected categories under applicable law.
Visual harassment eg. sexual imagery or use of sexual language at community events
Disrespect towards differences of opinion
Deliberate intimidation, stalking, harassing photography or recording
Sustained disruption of talks or other events
Inappropriate or unwanted physical contact
Intimidation or bullying (online or in-person)
Unwelcome sexual attention
Reporting and Enforcement
<Typography variant="h4" gutterBottom="true" className={classes.headingstyles}>REPORT A PROBLEM</Typography>
The worst thing that can happen is someone keeps quiet when there are problems. There are a number of things that you can do to resolve conflicts and problems as best you can 
because we take incidents regarding the topics mentioned very seriously. We are always there for you to discuss any problem and 
together we will find out what steps we need to take next to solve the problem maintaining the confidentiality.
 <a href="mailto:opensource@techphantoms.tech"><br/>opensource@techphantoms.tech </a><br/>
 <br/>
<Typography variant="h4" gutterBottom="true" className={classes.headingstyles}>REPORTING AND ENFORCEMENT </Typography>

If you are the subject of, or witness to any violations of this Code of Conduct, please contact us by submitting an incident report, or email us at: <a href="mailto:opensource@techphantoms.tech">opensource@techphantoms.tech </a>. 
Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project's leadership.
If necessary,Admins are empowered to take appropriate actions that may include, but are not limited to, warnings, expulsion from the conference without refund, and referrals to venue security or local law enforcement.
</Typography>      
           
            </Grid>

        </Grid>
        </center></div>
    </div>
    )
}
export default Guidelines