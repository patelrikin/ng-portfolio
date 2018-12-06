import { Injectable, ViewChild } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import clientJson from '../assets/clients.js';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  techSkill: any = {};
  workexp: Array<object> = [];

  constructor() {
    this.techSkill['frontend'] = ['HTML5', 'CSS3', 'Javascript', 'HTML4', 'CSS2.1', 'PHP', 'Java', 'JSP', 'ASP', 'VB6', 'JSON', 'AJAX'];
    this.techSkill['framework'] = ['ReactJS', 'AngularJS', 'jQuery', 'Prototype', 'Dojo', 'YUI', 'Bootstrap', 'Wordpress', 'Drupal',
                                    'Joomla', 'Custom Proprietary (RemoteTools)'];
    this.techSkill['databases'] = ['SQL', 'MySQL', 'MongoDB', 'Oracle', 'MS SQL/Access', 'MS Access'];
    this.techSkill['other'] = ['Object Oriented Programming', 'Responsive Web Development', 'Team Leadership', 'Resource Management',
                                'Mentoring.'];

    this.workexp = [{
      title: 'Frontend Developer Consultant',
      location: 'Comcast Interactive Media, Philadelphia, PA',
      term: 'November 2016 - Present'
      },
      {
        title: 'Senior ReactJS Developer Consultant',
        location: 'Express Scripts Inc, Somerset, NJ',
        term: 'June 2016 - November 2016'
      },
      {
        title: 'Technical Manager, User Interface Engineering',
        location: 'eBay Enterprise, King of Prussia - PA',
        term: 'February 2015 – April 2016'
      },
      {
        title: 'Lead Web Developer, User Interface Engineering',
        location: 'eBay Enterprise, King of Prussia - PA',
        term: 'February 2011 – Feb 2015'
      },
      {
        title: 'Sr. Web Developer',
        location: 'TrueAction Inc, King of Prussia - PA',
        term: 'March 2010 – Feb 2011'
      },
      {
        title: 'Lead Web Developer',
        location: 'Anagh Technologies Inc, South Plainfield - NJ',
        term: 'June 2009 – March 2010'
      },
      {
        title: 'Senior Frontend Web Developer',
        location: 'Respironis Inc, Morrisville - PA',
        term: 'December 2007 – June 2009'
      },
      {
        title: 'Senior Software Developer',
        location: 'Priya Web Solutions Inc, Ahmedabad, India / Iselin, NJ',
        term: 'May 2005 – December 2007'
      },
      {
        title: 'Software Engineer',
        location: 'Indian Oil Corporation Limited, Baroda, India',
        term: 'June 2003 – May 2005'
      }];
  }

  getClients() {
    return clientJson;
  }

  getClient(id) {
    return clientJson.clients[id];
  }

  getTechSkills(skillName) {
    return this.techSkill[skillName] || [];
  }

  getWorkExperience() {
    return this.workexp;
  }
}
