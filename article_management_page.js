document
  .querySelector(".newArticleLink a")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let title = prompt("기사 제목을 입력하세요:");
    let thumbnail = prompt("썸네일 이름을 입력하세요:");
    let classification = prompt("기사 분류를 입력하세요:");
    let status = prompt("등록 상태를 입력하세요:");
    let lastModified = prompt("최종 수정일을 입력하세요:");
    let reportingDate = prompt("기사 취재일을 입력하세요:");

    let message = `기사 제목: ${title}\n
      썸네일(파일) 이름: ${thumbnail}\n
      기사 분류: ${classification}\n
      등록 상태: ${status}\n
      최종 수정일: ${lastModified}\n
      기사 취재일: ${reportingDate}`;
    alert(message);
  });
