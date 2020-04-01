$(function () {
  var num = 0
  var lis = $('.all_step ul li')
  console.log(lis);
  var data = [{
      "book_name": "月亮和六便士",
      "press_name": "上海译文出版社",
      "author": "毛姆",
      "year": "1981",
      "book_catgory": "当代外国文学",
      "borrowed_time": "1年"
    },
    {
      "book_name": "纸老书未黄",
      "press_name": "海天出版社 ",
      "author": "徐雁",
      "year": "2012-11",
      "book_catgory": "文学",
      "borrowed_time": "2年"
    },
    {
      "book_name": "一千零一夜世界奇谈",
      "press_name": "人民文学出版社",
      "author": "（日）庄习浅水/ 李荣标",
      "year": "1985.06",
      "book_catgory": "民间故事集",
      "borrowed_time": "4年"
    },
    {
      "book_name": "谍海搏杀-舒伦堡回忆录",
      "press_name": "群众出版社",
      "author": "[德] 舒伦堡",
      "year": "2008",
      "book_catgory": "传记",
      "borrowed_time": "1年"
    },
    {
      "book_name": "毛姆短篇小说集",
      "press_name": "外国文学出版社",
      "author": "[英] 威廉·萨默塞特·毛姆 / 校注 汪培基  / 校注 唐宝心",
      "year": "1983-02",
      "book_catgory": "当代外国文学",
      "borrowed_time": "3年"
    },
    {
      "book_name": "道林·格雷的画像",
      "press_name": "山西人民出版社",
      "author": " [英] 奥斯卡·王尔德",
      "year": "1983",
      "book_catgory": "当代外国文学",
      "borrowed_time": "2.5年"
    },
    {
      "book_name": "明暗",
      "press_name": "上海译文出版社",
      "author": "夏目漱石/于雷",
      "year": "1983-02",
      "book_catgory": "日本文学丛书",
      "borrowed_time": "2年"
    },
    {
      "book_name": "射雕英雄传（上下）",
      "press_name": "福建人民出版社",
      "author": "金庸",
      "year": "1984-10",
      "book_catgory": "当代外国文学",
      "borrowed_time": "5年"
    }
  ]
  $('.layout').css({
    width: '80vw'
  })
  $('#tip').fadeIn(1000)

  $('#dialog_cover').fadeIn(1000)
  $('#btn_go').on('click', function () {
    $('#dialog_cover').fadeOut(500)
    $('.layout').css({
      width: '80vw'
    }).fadeIn(1000)
    $('#tip').fadeIn(1000)
    $('.btn').addClass('box_shadow');
    $('.btn_tip').fadeIn(1000)
  })
  $('#importData').click(function () {
    lis[5].className = ''
    num = 1
    lis[num].className = 'active'
    $('.btn').removeClass('box_shadow');
    $('.btn_tip').fadeOut(500)
    $('#dialog').fadeIn(1000);
    $("#step").text('点击原始数据导入，导入图书数据');
    $("#stepTetx").text('将指定学校图书储存信息导入到本系统，进行一系列的分析运算，进行剔旧');
    $("#dialog_title").text('点击原始数据导入，导入图书数据');
    $("#dialog_text").text('将指定学校图书储存信息导入到本系统，进行一系列的分析运算，进行剔旧');
  });
  $("#nextStep").click(function () {
    num++
    if (num === 2) {
      lis[1].className = ''
      lis[2].className = 'active'
      $("#step").text('方法一：对比黑名单');
      $("#stepTetx").text('将导入图书储存信息与黑名单中的图书信息出版社、作者、书籍分类作对比，筛选出符合黑名单的图书数据');
      $("#dialog_title").text('方法一：对比黑名单');
      $("#dialog_text").text('将导入图书储存信息与黑名单中的图书信息出版社、作者、书籍分类作对比，筛选出符合黑名单的图书数据');
    } else if (num === 3) {
      lis[2].className = ''
      lis[3].className = 'active'
      $("#step").text('方法二：对比信誉积分');
      $("#stepTetx").text('比对本系统中录入的作者以及出版社的信誉积分，对于积分较低的作者以及出版社，在筛选过程中，将优先展示');
      $("#dialog_title").text('方法二：对比信誉积分');
      $("#dialog_text").text('比对本系统中录入的作者以及出版社的信誉积分，对于积分较低的作者以及出版社，在筛选过程中，将优先展示');
    } else if (num === 4) {
      lis[3].className = ''
      lis[4].className = 'active'
      $("#step").text('剔旧分析');
      $("#stepTetx").text('结合以上两种方法，对导入的图书信息数据，进行系统的筛选，');
      $("#dialog_title").text('剔旧分析');
      $("#dialog_text").text('结合以上两种方法，对导入的图书信息数据，进行系统的筛选，');
    } else if (num === 5) {
      lis[4].className = ''
      lis[5].className = 'active'
      $("#step").text('分析完毕，执行剔旧操作');
      $("#stepTetx").text('在本系统中进行剔旧分析完毕过后，系统将符合剔旧条件的数据综合起来，进行删除操作，然后生成一份剔旧表格，提供给用户查阅');
      $("#dialog_title").text('分析完毕，执行剔旧操作');
      $("#dialog_text").text('在本系统中进行剔旧分析完毕过后，系统将符合剔旧条件的数据综合起来，进行删除操作，然后生成一份剔旧表格，提供给用户查阅');
    } else {
      $('#dialog').fadeOut(500)
      $("#step").text('生成符合剔除条件图书');
      $("#stepTetx").text('生成符合剔除条件图书列表');
      num = 0
      var html = ''
      for (let i = 0; i < data.length; i++) {
        html += `<tr>
                      <td>《${data[i].book_name}》</td>
                      <td>${data[i].press_name}</td>
                      <td>${data[i].author}</td>
                      <td>${data[i].year}</td>
                      <td>${data[i].book_catgory}</td>
                      <td>${data[i].borrowed_time}</td>
                    </tr>`
        $("#tbody").html(html);
      }
      var htmlTwo = `共${data.length-1}项 每页20项`
      $("#tfoot").html(htmlTwo);
    }

  });
})