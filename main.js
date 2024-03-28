import * as d3 from "d3";

// SVG 캔버스 생성 및 설정
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 5000)
  .attr("height", 500);

// 객체 배열 데이터
const data =
  // [
  //   { x: 30, y: 30, radius: 20 },
  //   { x: 70, y: 70, radius: 15 },
  //   { x: 110, y: 100, radius: 25 },
  //   { x: 150, y: 30, radius: 10 },
  //   { x: 190, y: 90, radius: 20 },
  // ];
  [
    {
      fruit: "사과",
      quantity: 20,
      details: {
        color: "green",
        price: 1.2,
      },
    },
    {
      fruit: "바나나",
      quantity: 40,
      details: {
        color: "yellow",
        price: 0.8,
      },
    },
    {
      fruit: "체리",
      quantity: 60,
      details: {
        color: "orange",
        price: 2.5,
      },
    },
    {
      fruit: "딸기",
      quantity: 80,
      details: {
        color: "red",
        price: 1.8,
      },
    },
    {
      fruit: "포도",
      quantity: 100,
      details: {
        color: "purple",
        price: 2.0,
      },
    },
  ];

// 데이터에 기반한 원 생성
const circles = svg
  .selectAll("circle.upper")
  .data(data)
  .enter()
  .append("circle")
  .attr("class", "upper")
  .attr("cx", (d) => d.quantity * 15)
  .attr("cy", (d) => 260 - 0.5 * d.quantity)
  .attr("r", (d) => d.quantity * 0.7)
  .attr("fill", "skyblue");

svg
  .selectAll("circle.lower")
  .data(data)
  .enter()
  .append("circle")
  .attr("class", "lower")
  .attr("cx", (d) => d.quantity * 15)
  .attr("cy", (d) => 250 + d.quantity)
  .attr("r", (d) => d.quantity)
  .attr("fill", "skyblue");

// const rect = svg
//   .selectAll("rect")
//   .data(data)
//   .enter()

//   .append("rect")
//   .attr("x", (d) => d.quantity * 7)
//   .attr("y", 100)
//   .attr("width", (d) => d.quantity)
//   .attr("height", (d) => d.quantity)
//   .attr("fill", (d) => d.details.color)
//   .attr("stroke", "white")
//   .attr("stroke-width", 0);

// svg
//   .selectAll("text")
//   .data(data)
//   .enter()

//   .append("text")
//   .attr("font-family", "sans-serif")
//   .attr("font-size", "11px")
//   .attr("x", (d) => d.quantity * 10)
//   .attr("y", 250)
//   .attr("fill", "white");
//   .attr("fruit");

const allcircles = svg.selectAll("circle");

// 마우스 오버 이벤트: 원의 크기와 색상을 변경
allcircles.on("mouseover", function () {
  d3.select(this).transition().duration(500).attr("fill", "blue");
});

// 마우스 아웃 이벤트: 원을 원래 크기와 색상으로 복원
allcircles.on("mouseout", function () {
  d3.select(this).transition().duration(500).attr("fill", "skyblue");
});
