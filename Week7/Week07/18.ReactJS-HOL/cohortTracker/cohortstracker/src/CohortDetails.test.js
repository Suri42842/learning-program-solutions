import React from 'react';
import { shallow, mount } from 'enzyme';
import CohortDetails from './CohortDetails';
import { CohortsData } from './Cohort';

describe('Cohort Details Component', () => {
  
  const testCohort = CohortsData[0]; // using INTADMDF10

  // Test 1: Component creation
  test('should create the component', () => {
    const wrapper = shallow(<CohortDetails cohort={testCohort} />);
    expect(wrapper.exists()).toBe(true);
  });

  // Test 2: Props initialization
  test('should initialize the props', () => {
    const wrapper = mount(<CohortDetails cohort={testCohort} />);
    const props = wrapper.props();
    expect(props.cohort).toBe(testCohort);
    expect(props.cohort.cohortCode).toBe('INTADMDF10');
    expect(props.cohort.technology).toBe('.NET FSD');
  });

  // Test 3: Render h3 with cohort code
  test('should display cohort code in h3', () => {
    const wrapper = mount(<CohortDetails cohort={testCohort} />);
    const h3 = wrapper.find('h3');
    expect(h3.text()).toContain(testCohort.cohortCode);
  });

  // Test 4: Snapshot test
  test('should always render same html', () => {
    const wrapper = shallow(<CohortDetails cohort={testCohort} />);
    expect(wrapper).toMatchSnapshot();
  });

});
