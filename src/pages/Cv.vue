<template>
  <div class="cv container">
    <h2 class="main-title">Curriculum Vitae</h2>
    <div>
      <h3>Personal Statement</h3>
      In 2010 I finished my degree in Computing gaining a 2:1 with Honours.
      Since I graduated I have been working for a Telecommunications company as
      part of the Development team. I was first brought on-board as a Developer
      to utilise my skills in languages such as PHP, MySQL, HTML, CSS and
      JavaScript. However, I was keen to expand my abilities to other areas
      which included learning new skills in the DevOps role. I feel I am a big
      part of making the team successful, this includes implementing the Laravel
      framework, which has vastly improved productivity. I recently got promoted
      to Software Team Lead, where I manage, mentor and train a small team of
      Software Developers to ensure software is produced at a high quality using
      best practices.
    </div>
    <div>
      <h3>Specialist Skills</h3>
      <ul v-bind:key="skill.id" v-for="skill in skills">
        <li>{{ skill.duration }} years: {{ skill.desc }}</li>
      </ul>
    </div>
    <div>
      <h3>Employment History</h3>
      <div
        class="cv-employ"
        v-bind:key="employment.id"
        v-for="employment in employments"
      >
        <div class="cv-employ-title">
          {{ employment.name }} - {{ employment.location }}
        </div>
        <div
          class="cv-employ-subtitle"
          v-bind:key="role.id"
          v-for="role in employment.roles"
        >
          {{ role.title }} ({{ role.date }})
        </div>
        <div v-bind:key="content.id" v-for="content in employment.content">
          {{ content.desc }}
          <br />
          <br />
        </div>
      </div>
    </div>
    <div>
      <h3>Education</h3>
      <div
        class="cv-employ"
        v-bind:key="education.id"
        v-for="education in educations"
      >
        <div class="cv-employ-title">
          {{ education.name }} - {{ education.location }}
        </div>
        <div
          v-bind:key="qualification.id"
          v-for="qualification in education.qualifications"
        >
          <div class="cv-employ-subtitle">{{ qualification.name }}</div>
          <div v-bind:key="content.id" v-for="content in qualification.content">
            {{ content.desc }}
          </div>
          <br />
        </div>
      </div>
    </div>
    <div>
      <h3>References</h3>
      References are available upon request.
    </div>
  </div>
</template>

<script>
export default {
  name: "cv",
  data() {
    return {
      skills: [
        {
          id: 1,
          duration: this.moment().diff(this.moment([2008, 9, 1]), "years"),
          desc: "PHP 5/PHP 7, MySQL, HTML, CSS/SaSS"
        },
        {
          id: 2,
          duration: this.moment().diff(this.moment([2010, 5, 1]), "years"),
          desc: "Linux/LAMP Stack, JavaScript/JQuery/VueJS"
        },
        {
          id: 3,
          duration: this.moment().diff(this.moment([2015, 0, 1]), "years"),
          desc: "Laravel, Git, PHPUnit"
        }
      ],
      employments: [
        {
          id: 1,
          name: "Current Employer",
          location: "Bristol",
          roles: [
            {
              id: 1,
              title: "Software Developer - Web Services",
              date: "September 2018 to present"
            }
          ],
          content: []
        },
        {
          id: 2,
          name: "Mainstream Digital",
          location: "Cirencester, Gloucestershire",
          roles: [
            {
              id: 1,
              title: "Software Team Lead",
              date: "March 2018 to September 2018"
            },
            {
              id: 2,
              title: "Business Continuity Manager",
              date: "June 2017 to September 2018"
            },
            {
              id: 3,
              title: "Developer",
              date: "June 2010 to March 2018"
            }
          ],
          content: [
            {
              id: 11,
              desc:
                "During my time at the company I have gained a lot of experience creating high quality public and internal web portals as well as developing backend micro services and RESTful APIs. I have developed various systems while working at the company, including developing new products to sell to our customers and automating in house procedures. Within the first year of working at the company I had established the company’s Intranet, which improved the day to day working for all members of staff. More recently I have developed a public web portal for our customers where they configure and monitor the different products and services they have with the company. Although the company was fully established when I joined, my team was treated as a start up, therefore, I have been able to influence high level decisions such as programming techniques and tools and vastly expanding the company data centre infrastructure, showing I am motivated and proactive."
            },
            {
              id: 12,
              desc:
                "Since learning the Laravel framework three years ago, I feel my skills in Object Orientated coding and automated testing have greatly improved, as well as my knowledge of design principles such as SOLID and DRY. Over this time I have also built several PHP packages, which provide reusable code and a foundation for programming in both our internal and external web platforms. I have also enhanced my skills by using VueJS, a JavaScript framework and the CSS extension language, SaSS, which I compile using NodeJS."
            },
            {
              id: 13,
              desc:
                "In recent months I have been learning Android, I can now add and enhance features on an existing Android application. This shows I have the ability to adapt to new challenges and that I have a strong programming foundation."
            },
            {
              id: 14,
              desc:
                "Additionally, I have established my skills in DevOps and networking, which involves deploying and maintaining Linux servers. I have experience using the Linux command line as well as installing and configuring the operation system and the services. With my expanded role I became instrumental in ensuring connectivity, security and performance of these servers and the underlying data centres."
            },
            {
              id: 15,
              desc:
                "After being promoted to Software Team Lead, I have implemented several improvements within the team, including adopting the Kanban methodology, implementing an improved software life cycle and assuring design principles are utilised. I am instrumental in designing the software architecture behind all software projects and draw on my knowledge in DevOps to plan and integrate solutions in to the wider system architecture. I additionally ensure software is prioritised and achieved at a high standard within tight deadlines. Another big part of the role is to mentor other team members and pass on my experience of delivering high quality solutions, while encouraging them to keep abreast of the latest best practices and technologies. My role has given me increased responsibility and management skills."
            },
            {
              id: 16,
              desc:
                "Last year I earned the role of Business Continuity Manager, which involves identifying risks, developing new policies and procedures and then implementing them across the entire company. This shows I have excellent organisational and communication skills. I gained the ISO 22301:2012 in Business Continuity accreditation for the company in May 2018."
            }
          ]
        },
        {
          id: 3,
          name: "Axiell",
          location: "Ferndown, Dorset",
          roles: [
            {
              id: 1,
              title: "Web Developer",
              date: "June 2008 to June 2009"
            }
          ],
          content: [
            {
              id: 11,
              desc:
                "The job at Axiell was part of my University placement year. They initially contracted me for 40 weeks which was then extended to 52 weeks after the company acknowledged the high quality work I was producing. My core duty was to create well designed maintainable interface using HTML and CSS. The project also required frequent validation, accessibility and usability testing, which I volunteered to take on and ultimately became my responsibility. Working for the company involved managing a large workload, good communication skills and team work in addition to excellent technical skills in HTML and CSS."
            }
          ]
        },
        {
          id: 4,
          name: "Pall",
          location: "Ilfracombe, Devon",
          roles: [
            {
              id: 1,
              title: "Line Worker",
              date: "March 2006 to September 2006"
            }
          ],
          content: [
            {
              id: 11,
              desc:
                "This job involved working to daily targets and working within regulations as well as correctly filling in paperwork and forms correctly and efficiently. The skills I obtained from this job were communication, team work and time management."
            }
          ]
        },
        {
          id: 5,
          name: "Combe Martin Wildlife Park",
          location: "Combe Martin, Devon",
          roles: [
            {
              id: 1,
              title: "Shop Assistant",
              date: "April 2003 to November 2005"
            }
          ],
          content: [
            {
              id: 11,
              desc:
                "While still in full time education I worked as a shop assistant. The skills I gained working within this role was time management, communication, money handling, customer service and team work."
            }
          ]
        }
      ],
      educations: [
        {
          id: 1,
          name: "Bournemouth University",
          location: "Bournemouth, Dorset",
          qualifications: [
            {
              id: 11,
              name: "2:1 BSc (Hons) Computing",
              content: [
                { id: 21, desc: "Final Year Modules:" },
                { id: 22, desc: "Web Systems" },
                { id: 23, desc: "Software Systems Modelling" },
                { id: 24, desc: "Digital Media and Games" },
                { id: 25, desc: "Final year dissertation and project" }
              ]
            }
          ]
        },
        {
          id: 2,
          name: "Ilfracombe College",
          location: "Ilfracombe, Devon",
          qualifications: [
            {
              id: 11,
              name: "A Levels",
              content: [
                { id: 21, desc: "A-Level Information Technology (A)" },
                { id: 22, desc: "A-Level Maths (D)" },
                { id: 23, desc: "AS-Level Media Studies (C)" },
                { id: 24, desc: "AS-Level Geography (D)" }
              ]
            },
            {
              id: 12,
              name: "GCSEs",
              content: [
                {
                  id: 21,
                  desc: "10 GCSEs A - C including Maths, Science and English"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
