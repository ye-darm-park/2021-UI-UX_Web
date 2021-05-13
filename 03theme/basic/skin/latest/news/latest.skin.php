<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.$latest_skin_url.'/style.css">', 0);
$list_count = (is_array($list) && $list) ? count($list) : 0;
?>


  <div class="section clearfix">
    <div class="section_title">
      <h3><a href="<?php echo get_pretty_url($bo_table); ?>"><?php echo $bo_subject ?></a></h3>
      <a href="<?php echo get_pretty_url($bo_table); ?>" class="more_btn">more</a>
    </div>
      <div class="section_contents">
        <ul class="news_list clearfix">
          <?php for ($i=0; $i<$list_count; $i++) {  ?>
          <li>
            <a href="<? echo get_pretty_url($bo_table, $list[$i]['wr_id']); ?>">
              <h4 class="new_title"><? echo $list[$i]['subject']; ?>
              <?php if ($list[$i]['icon_new']) echo "<span class=\"new_icon\">N<span class=\"sound_only\">새글</span></span>"; ?>
              </h4>
              <p class="date"><?php echo $list[$i]['datetime2'] ?></p>
            </a>
          </li>
          <?}?>
        </ul>
      </div>
  </div>
