document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("submitBtn")
    .addEventListener("click", function (event) {
      event.preventDefault();

      let title = document.getElementById("title").value;
      let journalistName = document.getElementById("journalistName").value;
      let journalistEmail = document.getElementById("journalistEmail").value;
      let reportingDate = document.getElementById("reportingDate").value;
      let category = document.getElementById("category").value;
      let status = document.getElementById("status").value;
      let thumbnailFileName =
        document.getElementById("thumbnail").files[0]?.name;
      let content = document.getElementById("content").value;
      let contentImageFiles = document.getElementById("images").files;
      let contentImageFileNames = [];
      for (let i = 0; i < contentImageFiles.length; i++) {
        contentImageFileNames.push(contentImageFiles[i].name);
      }

      let message = `
      기사 제목: ${title}
      기자 이름: ${journalistName}
      기자 이메일: ${journalistEmail}
      기자 취재일: ${reportingDate}
      분류: ${category}
      등록 상태: ${status}
      썸네일(파일) 이미지: ${thumbnailFileName}
      기사 내용: ${content}
      기사 내용 이미지 첨부: ${contentImageFileNames.join(", ")}`;

      alert(message);
    });
});
