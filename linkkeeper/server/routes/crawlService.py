import sys
import requests
from bs4 import BeautifulSoup

link = sys.argv[1]

# 링크 받는다

oa_request = requests.get(link)
oa_request.raise_for_status()

# soup으로 내부 텍스트 다 가져옴.
oa_soup = BeautifulSoup(oa_request.text, "lxml")

# 앱 이름
oa_title = oa_soup.find("div", {"class": "sIskre"}).find(
    "h1", {"class": "AHFaub"}).get_text()

# # 리뷰 수
# oa_review_numbers = oa_soup.find("span", {"class", "AYi5wd TBRnV"})

# # 별점
# oa_rating = oa_soup.find("div", {"class": "BHMmbe"})

# # 설명
# oa_infos = oa_soup.find_all("div", {"class": "hAyfc"})

# oa_infos_title = oa_soup.find_all("div", {"class": "BgcNfc"})

# 카테고리
oa_category = oa_soup.find_all("a", {"class": "hrTbp R8zArc"})
oa_category = oa_category[1].get_text()

oa_image_src = oa_soup.find("img", {"class": "T75of sHb2Xb"})

# print("앱 이름 : ", oa_title.span.get_text())
# print("리뷰 수 : ", oa_review_numbers.span.get_text())
# print("별점 : ", oa_rating.get_text())
# print(oa_infos_title[0].get_text(), oa_infos[0].find(
#     "span", {"class": "htlgb"}).get_text())
# print(oa_infos_title[1].get_text(), oa_infos[1].find(
#     "span", {"class": "htlgb"}).get_text())
# print(oa_infos_title[2].get_text(), oa_infos[2].find(
#     "span", {"class": "htlgb"}).get_text())

# print("")

datas = {
    "name": oa_title,
    "category": oa_category,
}
print(oa_title)
print(oa_category)
