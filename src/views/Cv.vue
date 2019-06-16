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
        <li>
          {{ moment().diff(moment(skill.duration), "years"), }} years:
          {{ skill.desc }}
        </li>
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
