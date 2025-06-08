const IS_SHOW_TEST_LINK = true;

const testLinkMap = {
  "/src/exercises/exercise_1/index.html": "../../test/exercise_1/index.html",
};

const onShowTestLink = () => {
  const { pathname } = window.location;
  const pathTest = testLinkMap[pathname];
  if (pathTest && IS_SHOW_TEST_LINK) {
    const testElement = document.createElement("a");
    testElement.href = pathTest;
    testElement.innerText = "Test";
    const testLinkElement = document.querySelector("#test-link");
    if (testLinkElement) {
      testLinkElement.appendChild(testElement);
    }
  }
};

onShowTestLink();
