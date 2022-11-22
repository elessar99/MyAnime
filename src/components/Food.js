import "./Css/FoodAnime.css"

const FoodAnime = () =>{
  return (
    <>
    <div className="aFoodPage">
      <div className="aFoodOne">
        <div className="aFoodHeader">Anime Nedir</div>
        <hr color="blue" width="100%" />
        <div>Anime (Japonca: アニメ), Japonya'ya özgü manga çizim sanatıyla çizilmiş çizgi film, animasyondur. Anime kelimesi İngilizcedeki animation kelimesinin kısaltılmış halidir. Yetişkinlere göre olan yapımların konusu bir sinema filmi gibi ciddi olur. TDK tarafından "Japon çizgi filmi" karşılığı teklif edilmiştir.</div>
      </div>
      <div className="aFoodTwo">
        <div className="aFoodHeader">Biz Kimiz?</div>
        <hr color="red" width="100%" />
        <div>
          <div>Hakkımızda</div>
          <div>E-Mail</div>
          <div>Discord</div>
        </div>
      </div>
      <div className="aFoodThree">
        <div className="aFoodHeader">Destek</div>
        <hr  color="green" width="100%" />
        <div>
          <div>SSS</div>
          <div>Hata Bildir</div>
          <div>Canlı Destek</div>
          <div>Ekibe Başvur</div>
        </div>
      </div>

    </div>
    </>
  );
}

export default FoodAnime ;

