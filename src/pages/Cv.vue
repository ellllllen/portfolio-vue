<template>
  <div class="cv container">
    <h2 class="main-title">Curriculum Vitae</h2>
    <div>
      <h3>Personal Statement</h3>
      In 2010 I finished my degree in Computing gaining a 2:1 with Honours,
      since then I have been working as a software developer. I have a strong
      programming foundation and enjoy adapting to new challenges. I am a hard
      worker and love to be part of a team.
    </div>
    <div>
      <h3>Specialist Skills</h3>
      <ul>
        <li v-bind:key="skill.id" v-for="skill in skills">
          {{ moment().diff(moment(skill.duration), "years") }} years:
          {{ skill.desc }}
        </li>
      </ul>
      <br/>
      <div class="cv-employ-title">Additional experience with:</div>
      <ul>
        <li>
          AWS (API Gateway, Athena, Cloud9, Cloud Formation, CloudWatch,
          CodeDeploy, DynamoDB, Lamdba, RDS, S3, SNS, SQS)
        </li>
        <li>Docker, Docker Compose, Vagrant, Serverless, Travis CI, Jenkins</li>
        <li>NodeJS, VueJS</li>
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
        <div
          class="cv-employ-content"
          v-bind:key="content.id"
          v-for="content in employment.content"
        >
          {{ content.desc }}
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
          class="cv-employ-content"
          v-bind:key="qualification.id"
          v-for="qualification in education.qualifications"
        >
          <div class="cv-employ-subtitle">{{ qualification.name }}</div>
          <ul>
            <li
              v-bind:key="content.id"
              v-for="content in qualification.content"
            >
              {{ content.desc }}
            </li>
          </ul>
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
import dataSkills from "@/data/skills.json";
import dataEmployment from "@/data/employment.json";
import dataEducation from "@/data/education.json";

export default {
  data() {
    return {
      skills: dataSkills,
      employments: dataEmployment,
      educations: dataEducation
    };
  }
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding-left: 20px;
}

.cv-employ-content {
  margin-bottom: 10px;
}
</style>
