import { actionTypes } from '../../constants';

export const defaultState = {
  data: [
    {
      title: 'Foundation',
      steps: [
        { name: 'Setup virtual office', completed: false },
        { name: 'Set mission & vision', completed: false },
        { name: 'Select Business name', completed: true },
        { name: 'Buy domains', completed: true },
      ],
    },
    {
      title: 'Make a Business Plan',
      steps: [
        { name: 'Create roadmap', completed: false },
        { name: 'Competitor analysis', completed: false },
      ],
    },
    {
      title: 'Secure Funding',
      steps: [
        { name: 'Friends and family', completed: true },
        { name: 'Angel investors', completed: false },
        { name: 'Venture capitalists', completed: true },
        { name: 'Bank loans', completed: false },
      ],
    },
    {
      title: 'Find the Right People',
      steps: [
        { name: 'Attorneys', completed: false },
        { name: 'Certified Public Accountants', completed: false },
        { name: 'Insurance professionals', completed: true },
        { name: 'Bankers', completed: true },
      ],
    },
    {
      title: 'Comply with the Laws',
      steps: [
        { name: 'Applying for a business license', completed: false },
        { name: 'Registering your business name', completed: false },
        { name: 'Getting a federal tax ID number', completed: true },
        { name: 'Filing for a trademark', completed: false },
        { name: 'Creating a separate bank account', completed: false },
        {
          name: 'Familiarizing yourself with industry regulations',
          completed: true,
        },
        { name: 'Building contracts for clients', completed: false },
      ],
    },
    {
      title: 'Develop a Marketing Plan',
      steps: [
        { name: 'Establish a brand identity', completed: false },
        { name: 'Stand out from competition', completed: false },
        {
          name: 'Create customer relationships and build loyalty',
          completed: false,
        },
        {
          name: 'Increase visibility, which attracts new customers',
          completed: false,
        },
        { name: "Strengthen your company's reputation", completed: false },
      ],
    },
    {
      title: 'Discovery',
      steps: [
        { name: 'Create roadmap', completed: false },
        { name: 'Competitor analysis', completed: false },
      ],
    },
    {
      title: 'Delivery',
      steps: [
        { name: 'Release marketing website', completed: true },
        { name: 'Release MVP', completed: false },
      ],
    },
  ],
};

export default (
  state = defaultState,
  { type, payload }: { type: string; payload: any },
) => {
  switch (type) {
    case actionTypes.TOGGLE_STEP:
      return { ...state, ...payload };
    case actionTypes.COMPLETE_PHASE:
      return { ...state, ...payload };
    case actionTypes.DISPLAY_FACT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
