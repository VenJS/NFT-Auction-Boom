import classNames from "classnames";
import styles from "./ActivityList.module.scss";
import ActivityListItem from "./ActivityListItem";
import { Stack } from "@mui/material";

export default function ActivityList({
  items = [
    {
      created_at: "2022-02-06T22:18:15",
      user: {
        avatar: {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfkXX6ehXfa-zzSjkEQjne-NTk9Qkh2HtqXQ&usqp=CAU",
        },
        verified: true,
        name: "Gordon",
      },
      nft: {
        name: "Dog",
        owner: {
          username: "Antonio",
          avatar: {
            url: String,
          },
          verified: Boolean,
        },
      },
      type: "buy",
    },
    {
      created_at: "2022-02-08T22:18:15",
      user: {
        avatar: {
          url: "data:image/jpeg;base64,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",
        },
        verified: Boolean,
        name: "Lisa",
      },
      nft: {
        name: "Dog",
        owner: {
          username: "Antonio",
          avatar: {
            url: String,
          },
          verified: Boolean,
        },
      },
      type: "buy",
    },
    {
      created_at: "2022-02-010T22:18:15",
      user: {
        avatar: {
          url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ0AAAC7CAMAAABIKDvmAAAAkFBMVEULCwv///8JCQkAAACYmJgFBQWcnJz8/PyTk5OWlpaenp739/fPz8/t7e3w8PD19fW0tLTb29uCgoJGRkbe3t55eXkyMjI/Pz86Ojrn5+esrKy6urpZWVlvb29iYmLU1NTIyMgnJydRUVEaGhpycnKBgYEiIiJoaGgtLS01NTWLi4vJycmmpqZfX19LS0sUFBQk7aqoAAAUY0lEQVR4nO2dCXuqzA6AGcImm6goCiK4gtTl//+7mwygqGDtOf3uAds8dzltceE1ySSZTBSEX/mVX/mVX/mVX/mVX/mVX/npIuJ/xH/9Jloh4q3867fzjwUJyFDITweSsxgHkTsIxgDyT+ZBdw6QGSwXtVeqx480G4IxdRnr++E8PFiM2aMSh/zDgPCbhZXBjAxg6aHbGPcZC0G+cyM/QFGKO4SEMXcJ2xmaSSDA2WRsiGjGwaxvxaM7HG/JQxRLGDJsGDMBdr5FbsOaAjiMBW7hRlgG4nXFkd8TSOUOEcYHgIA/nRwEoq4BAsIw8JPp/IOxDTebjTNwzUx8z/WXlhFYHD4GgwgVAWHQ7/BX0/H2jJiUYLvLWfnMWCILO1cU5y3XX4SxdEpbKGDw35PbzP8P+A0DzFiPdMX2s6DP1HhT+NV/996/XfDTH6uMzZwsDLdjkJ9cCkPmIjcdtILdbPVmOBCGhMvIsVxDn10Le8TGxuCoTuhN5z6azOKtnAeayZaxAzzVicvFaCpMgoUOcF6M5wAms3ZvpB0IY2QwfeoE51duCI7MBVjDJOZx+xjpZO9Fw2cDh1kefH4xCqxWIMAcDcY1UU/SA64sbxJ35HEGLptscH4NBq0rAuxs5lLcbrG5/zY08nx1SkqfvAqDBFcUa4ePTFh/aqFPfYuggysGdwBqNP4iDVpcnYjFEZutMTp9AxxiEWiYiQhfgSHIotNXi4CjP6okt//VO/0/CMFQMAE5UXz9tYdSTrM78mUl1nTf11adT+HQZwwZ8z+Jt5oeS0CSWRnOs37W7RIq1bgMhPFK0NXwDJTpBXEQBDHGpHGXrYU+3Q82+AsYQm4xuWRql1favMilrr7kPRueqqyLHDuqHDzQWM/QTr7huWAYRf4S8/ygm8qR17kcSri+4cnEkWYxe5JQ5NFBGqjaKcgHKoZ/y/MhWY3FE0MddXBZEWFuM1Wlmk39+/763ciwcj2bzbtnKmgmA0alruGfBBpNAnuksepaxkLuc2mpq/WSoq6Gty3LX1YQEXSbSqqdUo48a3WZhrZed8PEQZAnS1jvvhaIyOl4wTqVzub7QQCniLEo6D3UukQB1ktab1YbOA+/5mHhNIIDs/ddUQ60kDG6OViaPLH4uF9dRUDjH9PWK6wcgOhrgZm4E0EekK10QjkwK7EYU6iuq37EQXifw2M0me5o3zVSYREhDfvlalj+/KhZGNyeukJDwpXEgpAZ85qNAljHGpghrF2mLhWkMaBg6qsvYXZEOdBfOCy21JPPDvD4XmFiWZDNUCUYU6duBOc+Y/bqizkdLBhGYB3wHDxj3QbMttn28SOH5QxT0L6EjpAxQ8LsfMWdy4u7LJcXQZh6F1ZZpGGy8ZI6D+yHgJzsgmVbtpjyTRLabi62Ze0hfKVICBmzhrvWGwuFGQF9btv4Q7sPJQCopqfFbFRuTYeTS1FL9b3X1QNO/BHrluMgGhntkvEmlNs/5TCY6bJ5Udnrk/tgap8N9GO6233hZYRER/Wbee1OZonG1MZE8+FzxlgrZ4AG0is6AXWf6ExAyBt46p+x/rf4gNC+ds597118l/D0ZMbU+0xNBC/ICRhuPLPybQEjKjpVnpXSG0sjIqQuc1ttLBSQfzBrdB9miOlx7o3m2+H8jN7SL3SEpDkyzyt/4bwxBYa91eoiqcjbEoyaYPtS55XxJj0WLJbCZIim01gWw2cKA2kCO7SGppfDEK/NtQ4qkEcUdj1ZL2EUREeAMyoJhq1NWQopmYCOcgWG2xiLiOiXW1wk5T5UXaHH9LUmBZfPUQinoSZlyGTaVBaTx9Ie1hYLtozCuIa7hblqtDcoRRpzZp/3EbMnzcohwPEwsCJfGaaNF8mwkFLw+OIzAPlcv7ZQxqK3mcZJtdMB1WOarwJPyXjLrPOkfCzCStpRvzH62z0k09oreXAjtHVZyct/ksGabZ0iiEyf5LHHsVmBQIZxdgaObdVYBYGR0V5TIS8as76K6vvkIqFHbVwk+6bL4LTA6F4fUh8ts9YBLh31z4WZz7i9NMhxfNLCI64zGOfhV2NoBckhO6eSPqbwZYDhXFO3GNLyW0xDhEWsqg0fZX7RejfJQ/N+U50H/YGkDLytoocgkxrZTVci10GR2//92/9mEfNa+YwtmiNM8glRkbc2rSmQKpjqWpuepCcw4W0KDTcLK9VKW1pBL2iYT7ehRbj0mjfFXhAqOkbugwPiOMJRrascFVemFN+001Tyjwi1l2qiDe9OzNcJLlLDSrGTtAF3LAdN0lf4fI3RuSy76KRarBtcOVSpyUPC8QIDTb72DmAjOWUNSJMUD7TGWI7ir2FLaZQ41rSXUh9awd640qg3FRgpPbssiTmIoyl+pxeEgCltpZHjwIQ1o8NYNX+H3awCg0U19wkTSTOvlyAOqTnMp37toN00qD+U2XULBggDdiMPnkOEtCf51UsCTdk2KwccWkyjVI4Y8/qav4HO7mRzc6P4yJMiKcbNJXHvSTCHzxiUTcb/we38pVxoKDWfpwzuPQ0MrC8XooXtxnpPm91dYjbnMwIobaZRxBwZU8NHHNTg8iCHkVDUxdansaJouvVwifKEhkRnJ1tOg3YL7kvFVA08PNJgpjJOkiTcZIoiacpHzRWNoSjS2F5C89bjqPySzmRtYZybyniUO8oZrxUbpq9LPQ0jrWCm1sCgDZrGUrHXv9RG20ijxOHjTfB/5OKNKSXdLiiusvDnPRmNUXpVw7Ys26gjwSVp9BwUcJgtNpXSker4LimlHSeLJBxKuqL5GmQjQLdAR38pYkWnETcSqMqseaMBTgaL27ytwnXj7FKuJe8kSdHJIWiHiA0F6cRdx1g64udJcybSWtN4kIaMBpdkBUJq6m85jZHax/gLFpaPHkE/BLRsjlPMwRb4j2hAlXV+tKvOrz5KUzFNXluDTYAxbbtNBTyjTzusGtpFvzyBpC31EDa0guIvlAUlI8H0JRpNJQI6VsphtZyG4PJtpqB6TyZk0rh3l6n0X6FxaFhU6ASgafaEltMQYcMMj7xHVYapovTylKzPZnT4Rlq+pBtak24MaUWBFkejF1NRPV7Gq4ozVIYBs+PhejcbxBsv9R5j9TppylQwFKXAvNWnITkNHa0AVvdLxmwL6zUPQJaLdaC+tqLQBlP9K+GrOB2gQVoxBL6A3Agm+nm/Bg/L9mbdvT+KKzTsVnWFhsRm1DB8d1vGqRKtE5HhSzScGydaaaKCHu/BbzkNcp9ZeqAhEzdyv7UgUij5udy4DZie5LIzCnFH0PJD1Hy8RH9uje9oqHRX/D3Lly45OAcNCK5i8c2l8mYxalMHw7xDpNhPaTuNBZuZmI7cWIq6gEuPz0JLhDwzBTjVVD1u5FI5yvWB43O5Y6UzhEmr19eic4E2CKrbBXnjuRa5ppZoJu0RBKuSR/J0nbXL3Yj83A9ofCUakMLk7aktVw0+bYPiIu8aaVoewDliqqsFwTYdS73AYNTzlE9zSp7ox7hQDRGGQn51OjSLony7q8QkeX2DR4nXGvlgyZP4WOtlc6r4SZLWw7QtmnMHgNfP66peJJdTguBFZ3I2/GQpuU+Z7yA47achQkgtStcRVWvgxxM0iaf4+f9qOuYsH1Pyp8RvFNWwULPLegohJoLkfs/pGcA3ppgVdmBMCaexoqWADqJwCYFGLcw0SS8kW0wTRdJIIZyigxAei8iqv+SmlP+9x+YwGYcAG2mOeRCq1dZgs10XaKS2espSSHm4aSKMESbmUjY/zj2eZp1RG7aKRguEXbTIwvIm+DDMrXgzMc7H8PaIIJNQUqYrtiF76Y9avsAWU4sips88fnScVANkl0U97Qy71dAx+S6Bu4Ctrjm5o+QPvBgW5rhBeK62ncq7BfcRC7SyXk/TkxVtxaxUe9IFGpS2WdRWTOM3XL550NeH5wlXFTtyettwexiuV5pCk96KaFM+52uQGif3hxhgomY6mwlzRTu4s0Dazkk39jbG+i2nUToO3vVHTQU9oH6wAN9+WkyJhHS1CI8pZW5zWl2LwidXJDp58tBUSOkw2tFqrhzInIJtiGE+7GbqvO00iqp5YvCPHDI1pe4m14PEiaLI/DDdMgyx4oNv0pmEYreeoJmTur5smryB9rMM82pRP+sx1AoMRY8tD0UvWyoR9wcwzSgodSfDmz3F/qBaElT58WlUJCOu7VGX85YgXdS0fB12HBsjmLzRqeU0igDMzCt4wOujJq21rmmaceAr2/loa95URIvGFpDkOhiiPKSNqEweUn8cD2BmtE5tioJJ+2nI6ASKyj9Miju3g3kxgOc+ssgrn8iwtq4jn2lPsrfUFKlXNtHReCe3E4NpSxpOQeOay+atpBiV3W7Fm/olM6sToBZT84Qh7KXxx/CotZaO1LddNQpToYyK/3DdSCibXOC0uaFR1/NUEb6ixKrta5pfRGgOpBHj6XxHaGhFr8Gl26sfX5MOuMlKrE9oJPnZr75TPsqe0jGp5FoU/e/v6c+F08goIheK86skldHMAkXqV7E/oXFfYKVAtEej0LpDIywMgA6gcdlU1gvxprXF/YTGvdfVoSj0tLtCXIrI557NeEGiLI9a5+qCcdMFFjw7OC4K9+1zdPAgP43RCRhCkdTzIl5ZELzbP7ysuyinZzS4HlU3olAnBMpRRl2iceJdC3ktl1Faf3+yflp61+czacXz2Q+uK7KxoSdC83PPnVhRhGK/zTDyA2lUFjeCxyksGLErQXBIPhmwIAumubnE8cEkd0YO2UuHaKR9dVSWtW6KFder6gYQPIgs99kqD1ksZ1rspKC+jbuiGpwGzzCLH+W/mKkpC333KGcHfXi6DL9Bz8z3lTpDg08mee4QXnsueW342r6YS1z8ClcUvys+tKARNLavfUlg99GTpOGmMjqMjgTtO0VD5C3x3/Bc8prSNb1ydhB2VjX0+obX+G+F09g0HU/6mshrzOSVrBK7gc93DroCo2iTZP3lNyiHvERD0SvdDvQFCWF37EQo5rRYX5v13yAwos256/EfcqFx25tYbqVYVJ4dIn9VYIyGUjnAhNlrf3qF0REalNN/UsZ5RSClbdurD6VJFFpXstdCcsehGi9+YcoTgQ0ainI56ke7eBF0kQa+8b+OOGBCm43+ZZgaKlyevHYIxsVUZk3dja8+jZxkSs8Prl0c/cJOukdj0n8yxOq1pznvNUmzsoIGeebO2YlQ7iIoRUffnwuuKFp8mUcCGs1a7RyM8tTOjAXNY6tfEDpIflD7hROlrYSsYiff9V7/e8mVI3k28O3543lFFKNybVb2VtPuWtxBOxEuW/UKNYr+2TNQA9CW77zmWxFUJ+cbr92DcRlAEVOr6B+8cRF2cwh1jU6L5p3m1LYQVmB0iUaJQ46YuvkDHCBn00SXFKqsK3kfpUtfWdRJ1bhOXKCvSdZrhjY/fzCIQy1UJI3vunDXgy60v++kC+VS4kBzd6lO/PL759+hm2GuJhXtGryiWExw6qSdCCUNkRpzYpgPp03F8fv7QhQbjfqNJa3o1kgKGq7cqUT+TgoaB7T3RNfHQr64VL8+m/59vt1FgP2QtxtjeqIX/QlHPq93RHFHR+2EpKARY/K2oWoe7UTKsB7NF/PTfkd3eE5Xq3Q68s6Xr9GFlZKzQBrlDtsKYJxQs7HUZRqXVHYLfg/zcm0J4nlc9FcrPY0mK+iagj9IoTdJvVV4ls9SCUMrW60xGIeBtUdTsdreSP1UOA2BpnLNAg1xZCKsdKlO6Ly9TpMSjxcYl0OAmMIvqJfFYeq0yzTKr9k5LW2D3+USEqWWBhf9CGethHE942V4uCypeWsDdHNFyYVoeGo/9VTmknKMeCmrkYaH3raAcZmghzSmS5vNF04w7EAL4DMR+ZhNi4/ajDVJSZ7SUM7rXgHDV6s0prTfXzkk3mEaIQZfNFVX9TVl+IzG9a/aoXo6w5h6BlqL3LmS172IfI6imXdu2fTpP6ORLMtA46bT2NhfaXQZBqdBQ7nyzi1XU1ZPvKg+2So1MKo0uuxDheJbRA5lA62pjefNNLS5nsO4m81g7EeqtXwLGjJvvy9jhzh7ohtaL/cZ9yNK+mlJo9swiIY8YJvrCb4gK26dIlFNq0HiPwyisNaeSlFo12HQsYKdxebra09foPV4SO4HH2Yc6HdANO1x6pU9Ao3NhI6vriS0qaKq+33l5gbOwfmYlSuoFSOQHjcRpNRzHucEWh7130pvAINoeMxYy08Gj6iW6RwUBHJwopqhRtGOxnQ4XQ+8uOS9gQGIdSehq0gMo34UB2YmCmv/0JHXJI++qAHsExwNMqQ6YlEc7jyMcnMa7+f8Bzhcj89XzDpbKb+TvPiVG/6LQ4uugioxVml36k1glKdBh/zWmqZK1Mtszs+du2k1QXkDGjIU2vHaBM1cDgBzK/8WyO6na6VUcAQAn88sKiQaccWwklsYb0GjwBHz74d5QewxQGKXC2sVxtvgCPksH+UFGHo+J85a3ClG11GQFDh4L8dg/XhO+l6CCfByiH+vGO8A47IBKVNx1JrkX7XVKB8ewBaNZOC9JYySBuEY2fTNySO7kUWMznPhIrTNhcUVxnvgqGgHfTlZCLuG8V7xCVdV/Juqw4NivAkKkisOauaQAJwaFnRm7Ujh+2H9ziyEKg4KOYLHWZqWvs5HwqnB/tFI3gvGDQ4No+0JeNXZLFGIpkHfkcqCtIbFu8GoulI4GtQJdjlIP9PRRFLaNKBpZz+ABckFhwx7l2ctJ5cGe61QLRJKb21p/VNYCDc4+Bc4YqS5ocFe3oFW3EF4XUd+AIw7a6Hv6MOgcyJR01/f934YC6GKQwaBFtmYBx4fmyqKCou3hnGLA068NDjIzj+ThXDFUfDINukNiiqL94ch3KiHDE1a8UNYCLfq0aAVP4YFifgI5MeyqMAQZf7fH8yCi9gk//qN/Rv5ZXErvyxu5JHFz+Yh/CrFr/xKJ+V/YQw91w6Dc+QAAAAASUVORK5CYII=",
        },
        verified: Boolean,
        name: "Mike",
      },
      nft: {
        name: "Dog",
        owner: {
          username: "Antonio",
          avatar: {
            url: String,
          },
          verified: Boolean,
        },
      },
      type: "buy",
    }
  ],
}) {
    items.map((item, i) => console.log(item.user.avatar.url))
  return (
    <div className={classNames(styles["activity-list"])}>
      {items.map((item, i) => {
        <Stack spacing={2}>
          <ActivityListItem
            created_at={item.created_at}
            type={item.type}
            url={item.user.avatar.url}
            key={i}
          ></ActivityListItem>
        </Stack>
      })}s
    </div>
  );
}
