import React from 'react';

export class Welcome extends React.Component {
    render() {
        const programUrl: string = 'https://xweb2.algonquincollege.com/Monograph/ft_programs/programOfStudy.aspx?year=2020&id=0336X01FWO&';

        return (
            <div className='m-2'>
                <p>
                    My name is <strong>Patrick Kirk</strong>, and I am a recent graduate of <a href={programUrl} target='_blank'>
                    Algonquin College's Computer Programming</a> program. I am currently looking to get started in professional software development. 
                    My goal is to combine my education, my passion for learning and years of experience in a fast-paced, dynamic work environment, to 
                    meaningfully contribute to organizational goals while continuing to develop professionally.
                </p>

                <p>
                    Thank you for taking the time to visit. If you have any questions, please feel free to <a href='/contact'>contact me</a>.
                </p>
            </div>
        )
    }
}
