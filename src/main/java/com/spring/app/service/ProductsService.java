package com.spring.app.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.spring.app.model.Product;
import com.spring.app.repository.ProductsRepository;

@Service
@Transactional
public class ProductsService {
	@Autowired
	private ProductsRepository repository;

	// 顧客全件取得
	public List<Product> findAll() {
		return repository.findAll();
	}

	// 顧客一件取得
	public Product findOne(Integer id) {
		return repository.findOne(id);
	}

	//顧客の名前検索
	public List<Product> find(String name) {
		return repository.findByName(name);
	}

	// 顧客一件作成
	public Product create(Product product) {
		return repository.save(product);
	}

	// 顧客一件更新
	public Product update(Product product) {
		return repository.save(product);
	}

	// 顧客一件削除
	public void delete(Integer id) {
		repository.delete(id);
	}
}
