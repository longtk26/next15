interface Label {
  text: string;
  value: string;
}

interface FormType {
  title: string;
  labels: Label[];
  forgotPass: boolean;
  question: {
    text: string;
    action: string;
  };
}

export const formTypes: { [index: string]: FormType } = {
  login: {
    title: "Sign in",
    labels: [
      { text: "email address", value: "emailAddress" },
      { text: "password", value: "password" },
    ],
    forgotPass: true,
    question: {
      text: "don't have an account?",
      action: "sign up",
    },
  },
  register: {
    title: "Create your account",
    labels: [
      { text: "username", value: "username" },
      { text: "email address", value: "emailAddress" },
      { text: "password", value: "password" },
    ],
    forgotPass: false,
    question: {
      text: "already have an account?",
      action: "sign in",
    },
  },
};
